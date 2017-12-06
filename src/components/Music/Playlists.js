import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";

class App extends Component {
    constructor() {
        super();

        let token = JSON.parse(localStorage.getItem('token'));

        this.state = {items: [], token: token.access_token};
    }

    componentDidMount(){
        fetch("http://music.maatwerk.works/api/playlists/")
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

    render() {
        return (
            <div>
                <Link to="/music" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <div className="list-group">
                    {this.state.items.length ? this.state.items.map(item =>
                        <div className="list-group-item" key={item.id}>
                            <a href={"/music/Playlist/" + item.id} className="list-group-item">
                                <h4 className="list-group-item-heading">{item.name}</h4>
                            </a>
                            <Link to={"/music/editplaylist/" + item.id} className="btn btn-sm btn-secondary">
                                Edit
                            </Link>
                            <Button className="btn btn-sm btn-secondary"
                                onClick={() => {
                                    fetch("http://music.maatwerk.works/api/playlists/" + item.id, {
                                        method: 'DELETE',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                            'Authorization': 'Bearer ' + this.state.token
                                        }
                                    }).then(window.location.reload())
                                     }}>
                                <span className="glyphicon glyphicon-th-list"></span> Delete
                            </Button>
                        </div>) : <p> Loading... </p>}
                </div>
                <div><p></p></div>
                <Link to={"/music/addplaylist"} className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new playlist
                </Link>
            </div>
        );
  }
}

export default App;
