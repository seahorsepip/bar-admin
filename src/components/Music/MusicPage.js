import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MusicPage extends Component {
    render() {
        return (
            <div>
                <h1>Music</h1>
                <Link to="/music/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add songs
                </Link>
            </div>
        );
    }
}

export default MusicPage;