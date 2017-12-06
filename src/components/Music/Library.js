import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Link} from "react-router-dom";

class App extends Component {
    constructor() {
        super();

        let token = JSON.parse(localStorage.getItem('token'));

        this.state={
            items:[],
            toRemove: [],
            token: token.access_token
        };

        this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.onAfterSaveCell
        };
        this.selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.onRowSelect,
            bgColor: function (row, isSelect) {
                if (isSelect) {
                    const {id} = row;
                    return 'yellow';
                }
                return null;
            }
        };
    }

    componentDidMount(){
        fetch("http://music.maatwerk.works/api/songs/")
            .then(res => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({ items: data });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onAfterSaveCell(row, cellName, cellValue) {
        fetch("http://music.maatwerk.works/api/songs/" + row.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            },
            body: JSON.stringify(row)
        })
    }

    onRowSelect(row, isSelected, e) {
        e.preventDefault();
        if (isSelected == true) {
            this.state.toRemove[this.state.toRemove.length] = row.id;
        }
        else {
            this.state.toRemove[this.state.toRemove.indexOf(row.id)] = null;
        }
    }

    onRemove(e)
    {
        e.preventDefault();
        let tasks = [];

        console.log(this.state.toRemove);
        this.state.toRemove.forEach(id => tasks.push(
            fetch("http://music.maatwerk.works/api/songs/" + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.state.token
                }
            })
        ));

        Promise.all(tasks)
            .then(result => {
                console.log(result);
                window.location.reload()
            })
            .catch(error => alert(error));
    }

    render() {
        return (
            <div>
                <Link to="/music" className="btn btn-sm btn-secondary">back</Link>
                <Link to="/music/new" className="btn btn-sm btn-secondary">
                    <span className="glyphicon glyphicon-th-list"></span> Add new songs
                </Link>
                <hr/>
                <BootstrapTable className="test" data={this.state.items} keyField="id" search keyBoardNav cellEdit={ this.cellEditProp } selectRow={this.selectRowProp}>
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
            </div>
        );
    }
}


export default App;