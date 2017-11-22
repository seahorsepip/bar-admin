import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom'
import EventForm from './EventForm';

export class AddEventPage extends Component {

    render() {
        return (
            <div>
                <Link to="/bar" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <h1>Add new Event</h1>
                <Row>
                    <Col lg="6">
                        <EventForm/>
                    </Col>
                </Row>
            </div>
        );
    }
}