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

        /*this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange(this);
        this.handleAddressChange = this.handleAddressChange(this);
        this.handleZipcodeChange = this.handleZipcodeChange(this);
        this.handleCityChange = this.handleZipcodeChange(this);
        this.handleProfileImageChange = this.handleProfileImageChange(this);
        this.handleImagesChange = this.handleImagesChange(this);*/

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.bar){
            this.setState({
                id: this.props.id,
                name: this.props.name,
                description: this.props.description,
                address: this.props.address,
                zipcode: this.props.zipcode,
                city: this.props.city,
                profileImage: this.props.profileImage
            });
        }
    }

    /*handleNameChange(e) {
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
    }*/


    handleSubmit(event) {
        //TODO Fix form handling
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <TextFieldGroup
                    field="name"
                    value={this.state.name}
                    label="Name"
                    placeholder="Name"
                    addon="fa fa-header"
                    onChange={this.handleNameChange}/>
                <TextFieldGroup
                    field="description"
                    value={this.state.description}
                    label="Description"
                    placeholder="Description"
                    addon="fa fa-align-left"
                    onChange={this.handleDescriptionChange}/>
                <TextFieldGroup
                    field="address"
                    value={this.state.address}
                    label="Address"
                    placeholder="Address"
                    addon="fa fa-home"
                    onChange={this.handleAddressChange}/>
                <TextFieldGroup
                    field="city"
                    value={this.state.city}
                    label="City"
                    placeholder="City"
                    addon="fa fa-map-o"
                    onChange={this.handleCityChange}/>
                <TextFieldGroup
                    field="zipcode"
                    value={this.state.zipcode}
                    label="Zipcode"
                    placeholder="Zipcode"
                    addon="fa fa-university"
                    onChange={this.handleZipcodeChange}/>
                <img src={ this.state.profileimage } width={250} />
                <TextFieldGroup
                    field="profile_image"
                    value={this.state.profileimage}
                    label="Profile Image"
                    placeholder="Profile Image"
                    type="file"
                    addon="fa fa-image"
                    onChange={this.handleProfileimageChange}/>
                {
                    console.log(this.state.images)}{
                    this.state.images !== null ? this.state.images.map((item, index)=>
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
                    onChange={this.handleImagesChange}/>
                <button className="btn btn-default btn-group-lg">
                    <span className="fa fa-upload"></span> Save
                </button>
            </form>
        );
        return (<p> Loading...</p>);
    }
}

export default BarForm;