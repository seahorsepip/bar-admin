import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import TextFieldGroup from '../common/TextFieldGroup';
import {Link} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        let token = JSON.parse(localStorage.getItem('token'));

        this.state = {
            name: '',
            token: token.access_token
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.state.name));
        console.log(this.state.token);
        console.log('hi');
        fetch("http://music.maatwerk.works/api/playlists", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            },
            body: JSON.stringify({name: this.state.name})
        }).then(result => {
                console.log(result);
                window.location.href = "/music/playlists"

            }
        );
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {name} = this.state;
        return (
            <div>
                <Link to="/music/playlists" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <div><p></p></div>
                <Form onSubmit={this.onSubmit}>
                    <h1>New playlist</h1>
                    <TextFieldGroup
                        field="name"
                        value={name}
                        label="Name"
                        onChange={this.onChange}/>
                    <Button className="btn btn-dark ml-3 d-inline-block">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default App;
