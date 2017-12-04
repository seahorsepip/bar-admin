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
                console.log('State: ');
                console.log(this.state);
                console.log(this.state.bar.photos.images);
            })
    }

    render() {
        if (this.state.bar)
        return (
            <div>
                <h1>Add Bar</h1>
                <BarForm
                    bar={this.state.bar}
                />
            </div>
        );

        return <p> Loading... </p>
    }
}


export default AddBarPage;