import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class BarForm extends Component {
    constructor(){
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //TODO Fix form handling

    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <TextFieldGroup
                    field="name"
                    value={this.state.title}
                    label="Name"
                    placeholder="Name"
                    addon="fa fa-header"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="description"
                    value={this.state.description}
                    label="Description"
                    placeholder="Description"
                    addon="fa fa-align-left"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="address"
                    value={this.state.category}
                    label="Address"
                    placeholder="Address"
                    addon="fa fa-home"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="city"
                    value={this.state.category}
                    label="City"
                    placeholder="City"
                    addon="fa fa-map-o"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="zipcode"
                    value={this.state.category}
                    label="Zipcode"
                    placeholder="Zipcode"
                    addon="fa fa-university"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="profile_image"
                    value={this.state.image}
                    label="Profile Image"
                    placeholder="Profile Image"
                    type="file"
                    addon="fa fa-image"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="images"
                    value={this.state.image}
                    label="Images"
                    placeholder="Images"
                    type="file"
                    addon="fa fa-files-o"
                    onChange={this.handleChange}/>
                <button className="btn btn-default btn-group-lg">
                    <span className="fa fa-upload"></span> Save
                </button>
            </form>
        );
    }
}

export default BarForm;