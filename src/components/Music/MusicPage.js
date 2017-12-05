import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MusicPage extends Component {
    render() {
        return (
            <div>
                <h1>Music</h1>
                <Link to="/music/library" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Library
                </Link>
                <Link to="/music/playlists" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Playlists
                </Link>
            </div>
        );
    }
}

export default MusicPage;