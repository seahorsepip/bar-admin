import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { ucFirst } from "./BarUtils";

class BarForm extends Component {
    constructor(){
        super();

        this.setState({
            id: null,
            name: null,
            description: null,
            address: null,
            zipcode: null,
            city: null,
            profileImage: null,
            images: null
        });

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange(this);
        this.handleAddressChange = this.handleAddressChange(this);
        this.handleZipcodeChange = this.handleZipcodeChange(this);
        this.handleCityChange = this.handleZipcodeChange(this);
        this.handleProfileImageChange = this.handleProfileImageChange(this);
        this.handleImagesChange = this.handleImagesChange(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    handleAddressChange(e) {
        this.setState({address: e.target.value});
    }

    handleZipcodeChange(e) {
        this.setState({zipcode: e.target.value});
    }

    handleCityChange(e) {
        this.setState({city: e.target.value});
    }

    handleProfileImageChange(e) {
        this.setState({profileImage: e.target.value});
    }

    handleImagesChange(e) {
        this.setState({images: e.target.value});
    }


    handleSubmit(event) {
        //TODO Fix form handling
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <TextFieldGroup
                    field="name"
                    value={this.state.bar}
                    label="Name"
                    placeholder="Name"
                    addon="fa fa-header"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="description"
                    value={this.props.description}
                    label="Description"
                    placeholder="Description"
                    addon="fa fa-align-left"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="address"
                    value={this.props.address}
                    label="Address"
                    placeholder="Address"
                    addon="fa fa-home"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="city"
                    value={this.props.city}
                    label="City"
                    placeholder="City"
                    addon="fa fa-map-o"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="zipcode"
                    value={this.props.zipcode}
                    label="Zipcode"
                    placeholder="Zipcode"
                    addon="fa fa-university"
                    onChange={this.handleChange}/>
                <img src={ this.props.profileimage } width={250} />
                <TextFieldGroup
                    field="profile_image"
                    value={this.props.profileimage}
                    label="Profile Image"
                    placeholder="Profile Image"
                    type="file"
                    addon="fa fa-image"
                    onChange={this.handleChange}/>
                {
                    console.log(this.props.images)}{
                    this.props.images !== null ? this.props.images.map((item, index)=>
                        <img src={ item } width={150} alt='' className="imageList" />
                    ):(
                    <p> Loading... </p>
                    )
                }
                <TextFieldGroup
                    field="images"
                    value=''
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