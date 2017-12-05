import React, { Component } from 'react';
import BarForm from './BarForm';
import { fetchBarById } from "./BarUtils";

class AddBarPage extends Component {
    constructor() {
        super();

        this.state = {
            bar: null
        };
    }

    componentDidMount(){
        fetchBarById(this.props.match.params.id) //TODO: Put ID here
            .then(response => {
                this.setState({ bar: response.data });
                console.log(response);
            })
    }

    render() {
        if (this.state.bar)
        return (
            <div>
                <h1>Add Bar</h1>
                <BarForm
                    bar={this.state.bar}
                    name={this.state.bar.name}
                    description={this.state.bar.description}
                    address={this.state.bar.address}
                    zipcode={this.state.bar.zipcode}
                    city={this.state.bar.city}
                    profileImage={this.state.bar['profile_image']}
                />
            </div>
        );

        return <p> Loading... </p>
    }
}


export default AddBarPage;