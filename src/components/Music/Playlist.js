import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from "react-router-dom";


class App extends Component {
    constructor() {
        super();

        let token = JSON.parse(localStorage.getItem('token'));

        this.state = {
            playlist: [],
            toAdd: [],
            toRemove: [],
            library: [],
            token: token.access_token
        };
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onRowSelectAdd = this.onRowSelectAdd.bind(this);
        this.onRowSelectRemove = this.onRowSelectRemove.bind(this);
        this.selectRowPropAdd = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onRowSelectAdd,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    const {id} = row;
                    return 'yellow';
                }
                return null;
            }
        };
        this.selectRowPropRemove = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onRowSelectRemove,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    const {id} = row;
                    return 'yellow';
                }
                return null;
            }
        };
    }

    componentDidMount() {
        fetch("http://music.maatwerk.works/api/playlists/" + this.props.match.params.id + "/songs")
            .then(res => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({playlist: data});
                });
            })
            .catch((error) => {
                console.error(error);
            });
        fetch("http://music.maatwerk.works/api/songs/")
            .then(res => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({library: data});
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onRowSelectAdd(row, isSelected, e) {
        e.preventDefault();
        if (isSelected == true) {
            this.state.toAdd[this.state.toAdd.length] = row.id;
        }
        else {
            this.state.toAdd[this.state.toAdd.indexOf(row.id)] = null;
        }
    }

    onRowSelectRemove(row, isSelected, e) {
        e.preventDefault();
        if (isSelected == true) {
            this.state.toRemove[this.state.toRemove.length] = row.id;
        }
        else {
            this.state.toRemove[this.state.toRemove.indexOf(row.id)] = null;
        }
    }

    onAdd(e) {
        e.preventDefault();
        fetch("http://music.maatwerk.works/api/playlists/" + this.props.match.params.id + "/songs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            },
            body: JSON.stringify(this.state.toAdd)
        })
            .then(() => window.location.reload())
            .catch(error => alert(error));
    }

    onRemove(e) {
        e.preventDefault();
        let tasks = [];

        console.log(this.state.toRemove);
        this.state.toRemove.forEach(id => tasks.push(
            fetch("http://music.maatwerk.works/api/playlists/" + this.props.match.params.id + "/songs/" + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.state.token
                }
            })
        ));

        Promise.all(tasks)
            .then(() => window.location.reload())
            .catch(error => alert(error));
    }

    render() {
        return (
            <div>
                <Link to="/music/playlists" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <div><h3>Playlist:</h3></div>
                <BootstrapTable className="test" data={this.state.playlist} keyField="id" search keyBoardNav
                                selectRow={this.selectRowPropRemove}>
                    <TableHeaderColumn dataField="id" hidden={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="album">Album</TableHeaderColumn>
                    <TableHeaderColumn dataField="artist">Artist</TableHeaderColumn>
                </BootstrapTable>
                <div>
                    <Button className="btn btn-dark ml-3 d-inline-block"
                        onClick={this.onRemove}>
                        Remove selected songs
                    </Button>
                </div>
                <div><p></p></div>
                <div><h3>Library:</h3></div>
                <BootstrapTable className="test" data={this.state.library} keyField="id" search keyBoardNav
                                selectRow={this.selectRowPropAdd}>
                    <TableHeaderColumn dataField="id" hidden={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="album">Album</TableHeaderColumn>
                    <TableHeaderColumn dataField="artist">Artist</TableHeaderColumn>
                </BootstrapTable>
                <div>
                    <Button className="btn btn-dark ml-3 d-inline-block"
                        onClick={this.onAdd}>
                        Add selected songs
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
