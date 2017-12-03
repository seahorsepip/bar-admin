import React, { Component } from 'react';
import axios from 'axios';
import BarForm from './BarForm';
import { Badge } from 'reactstrap';
import { fetchBarById } from "./BarUtils";

class AddBarPage extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: '',
            address: '',
            city: '',
            zipcode: '',
            profileimage: null,
            images: null,
            token: ''
        };
    }

    componentDidMount(){
        fetchBarById() //TODO: Put ID here
            .then(response => {
                this.setState({ bar: response.data });
            })
    }

    render() {
        return (
            <div>
                <h1>Add Bar</h1>
                <BarForm
                    name={ this.state.name}
                    description={ this.state.description }
                    address={ this.state.address }
                    city={ this.state.city }
                    zipcode={ this.state.zipcode }
                    profileimage={ this.state.profileimage }
                />
            </div>
        );
    }
}


export default AddBarPage;