import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';


//todo:: discuss with yannick if we should abstract it into a central list common component (I say: Yes)
//items as a prop, maybe the ability to add a button array to display for each with callbacks?
export default class EventList extends Component {
    constructor() {
        super();

        let userDetails = JSON.parse(localStorage.getItem('token'));

        this.state = {events: [], userDetails};

    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        console.log(this.state.userDetails);
        console.log(this.state);
        fetch('http://maatwerk.works/api/events?barId=' + this.state.userDetails.barId)
            .then(events => events.json())
            .then(events => this.setState({events}));
    }

    onDeleteClick(event) {
        fetch('http://maatwerk.works/api/events' + event.id, {method: 'DELETE', headers: this.getHeaders()})
            .then(events => events.json())
            .then(json => this.getEvents());
    }

    getHeaders() {
        const header = new Headers();
        header.append('authorization', 'Bearer ' + this.state.userDetails.access_token);
        return header;
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {this.state.events.length ? this.state.events.map(evt =>
                        <div className="list-group-item" key={evt.id}>
                            <h4 className="list-group-item-heading">{evt.name}</h4>
                            <p className="list-group-item-text">{evt.description}</p>
                            <Link to={"/event/edit/" + evt.id + '/'}><Button color="info">Edit</Button></Link>{' '}
                            <Button color="danger" onClick={this.onDeleteClick.bind(this, evt)}>Delete</Button>
                        </div>) : <p> Loading... </p>}
                </div>
            </div>
        );
    }
}