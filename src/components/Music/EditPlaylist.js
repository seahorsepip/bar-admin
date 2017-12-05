import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import TextFieldGroup from '../common/TextFieldGroup';
import {Link} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            name: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        fetch("http://music.maatwerk.works/api/playlists/" + this.props.match.params.id)
            .then(res => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({ items: data });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();
        fetch("http://music.maatwerk.works/api/playlists/" + this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.items.id,
                name: this.state.name
            })
        }).then(
            window.location.href = "/music/playlists"
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
                    <h1>Edit playlist</h1>
                    <TextFieldGroup
                        field="name"
                        value={name}
                        label="Name"
                        placeholder={this.state.items.name}
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
