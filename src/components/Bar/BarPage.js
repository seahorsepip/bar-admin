import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import EventList from "./Event/EventList";

class BarPage extends Component {
    render() {
        return (
            <div>
                <h1>Bar Management</h1>
                <h2 className="d-inline-block align-middle">Events</h2>
                <Link to="/event/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new
                </Link>
                <EventList/>
            </div>
        );
    }
}

export default BarPage;