import React, {Component} from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';

export default class EventForm extends Component {
    static defaultProps = {
        name: '',
        id: false,
        description: '',
        start: false,
        end: false,
        method: 'POST'
    };
    constructor(props) {
        super(props);

        let currentDateTime = new Date().toISOString();
        currentDateTime = currentDateTime.substring(0, currentDateTime.length - 1);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            start: this.props.start ? this.getCompatibleDate(this.props.start) : currentDateTime,
            end: this.props.end ? this.getCompatibleDate(this.props.end) : currentDateTime,
            status: '',
            token: '45feb57ce42182121f336647b89701ced9da43aa'
        }; //when there is a login of sorts, it can prolly rerouted to a local session. or simply keep using tokens
        //no shits were given that day!

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getCompatibleDate(date) {
        let d = new Date(date).toISOString();
        return d.substring(0, d.length - 1);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        if (!this.state.name) console.log('what');
        event.preventDefault();
        console.log(this.props.id);
        let url = 'http://localhost:3000/api/events';
        if (this.props.id) url += '/' + this.props.id;
        fetch(url, this.getSettings()).then(res => this.setState({status: res.status}));
    }

    getSettings() {
        return {
            method: this.props.method,
            headers: this.getHeaders(),
            body: this.getEncodedBody()
        };
    }

    getHeaders() {
        const header = new Headers();
        header.append('content-type', 'application/x-www-form-urlencoded');
        header.append('authorization', 'Bearer ' + this.state.token);
        return header;
    }

    getEncodedBody() {
        const body = new URLSearchParams();
        body.append("name", this.state.name);
        body.append("description", this.state.description);
        body.append("start", new Date(this.state.start));
        body.append("end", new Date(this.state.end));
        return body;
    }


    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                {this.state.status === 200 && <div className="alert alert-success">Successfully submitted event!</div>}
                {this.state.status === 400 && <div className="alert alert-danger">Please fill in all fields.</div>}
                <TextFieldGroup
                    field="name"
                    value={this.state.name}
                    label="Event Name"
                    placeholder="My Event Name"
                    addon="fa fa-header"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="description"
                    value={this.state.description}
                    label="Description"
                    placeholder="Description"
                    addon="fa fa-align-left"
                    type="textarea"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="start"
                    value={this.state.start}
                    label="Start Date"
                    type="datetime-local"
                    addon="fa fa-calendar"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="end"
                    value={this.state.end}
                    label="End Date"
                    type="datetime-local"
                    addon="fa fa-calendar"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="token"
                    value={this.state.token}
                    label="Token"
                    addon="fa fa-image"
                    onChange={this.handleChange}/>
                <button className="btn btn-default btn-group-lg">
                    <span className="fa fa-save"/> Save
                </button>
            </form>
        );
    }
}