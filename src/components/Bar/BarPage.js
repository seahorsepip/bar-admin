import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

class BarPage extends Component {
    render() {
        return (
            <div>
                <h1>Bar Management</h1>
                <Link to="/bar/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new bar
                </Link>
            </div>
        );
    }
}

export default BarPage;