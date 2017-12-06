import React, { Component } from 'react';
import BarForm from './BarForm';
import { Link } from 'react-router-dom';
import { fetchBarById } from "./BarUtils";
import { Row, Col } from 'reactstrap';
import EventList from "./Event/EventList";
import { ucFirst } from './BarUtils';

class AddBarPage extends Component {
    constructor() {
        super();

        this.state = {
            bar: null
        };
    }

    componentDidMount(){
        fetchBarById(this.props.match.params.id)
            .then(response => {
                this.setState({ bar: response.data });
            })
    }

    render() {
        if (this.state.bar)
        return (
            <div>
                <Row>

                </Row>
                <Row>
                    <Col sm="5">
                        <h1>{ this.props.match.params.method ? ucFirst(this.props.match.params.method) : '' } Bar</h1>
                        <div>
                            <BarForm
                                bar={this.state.bar}
                            />
                        </div>
                    </Col>
                    <Col sm={{ size: 6, offset: 1 }} >
                        <h2>Events</h2>
                        <Link to="/event/new" className="btn btn-dark ml-3 d-inline-block">
                            <span className="glyphicon glyphicon-th-list"></span> Add new event
                        </Link>
                        <EventList/>
                    </Col>
                </Row>
            </div>
        );

        return <p> Loading... </p>
    }
}


export default AddBarPage;