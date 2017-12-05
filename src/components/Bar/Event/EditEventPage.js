import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom'
import EventForm from './EventForm';

export default class EditEventPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.eventId,
            name: '',
            description: '',
            start: false,
            end: false,
            token: '45feb57ce42182121f336647b89701ced9da43aa'

        }
    }

    componentWillMount() {
        console.log('what');
        fetch('http://maatwerk.works/api/events' + this.state.id)
            .then(event => event.json())
            .then(event => this.setState(event));
    }

    render() {
        return (
            <div>
                <Link to="/bar" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <h1>Edit Event</h1>
                <Row>
                    <Col lg="6">
                        {this.state.name &&
                        <EventForm
                            id={this.state.id}
                            name={this.state.name}
                            method='PUT'
                            description={this.state.description}
                            start={this.state.start}
                            end={this.state.end}/>}
                    </Col>
                </Row>
            </div>
        );
    }
}