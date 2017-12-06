import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { ucFirst } from "./BarUtils";

class BarForm extends Component {
    constructor(){
        super();

        this.state = {
            id: null,
            name: null,
            description: null,
            address: null,
            zipcode: null,
            city: null,
            profileImage: null,
            images: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        /*this.handleDescriptionChange = this.handleDescriptionChange(this);
        this.handleAddressChange = this.handleAddressChange(this);
        this.handleZipcodeChange = this.handleZipcodeChange(this);
        this.handleCityChange = this.handleZipcodeChange(this);
        this.handleProfileImageChange = this.handleProfileImageChange(this);
        this.handleImagesChange = this.handleImagesChange(this);*/

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.bar.id,
            name: this.props.bar.name,
            description: this.props.bar.description,
            address: this.props.bar.address,
            zipcode: this.props.bar.zipcode,
            city: this.props.bar.city,
            profileImage: this.props.bar.profileImage
        });
        console.log('Comp DID mount!');
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    /*handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    /*handleAddressChange(e) {
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
        console.log(this.state);
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
                    value={this.props.bar.description}
                    label="Description"
                    placeholder="Description"
                    addon="fa fa-align-left"
                    onChange={this.handleDescriptionChange}/>
                <TextFieldGroup
                    field="address"
                    value={this.props.bar.address}
                    label="Address"
                    placeholder="Address"
                    addon="fa fa-home"
                    onChange={this.handleAddressChange}/>
                <TextFieldGroup
                    field="city"
                    value={ucFirst(this.props.bar.city)}
                    label="City"
                    placeholder="City"
                    addon="fa fa-map-o"
                    onChange={this.handleCityChange}/>
                <TextFieldGroup
                    field="zipcode"
                    value={this.props.bar.zipcode}
                    label="Zipcode"
                    placeholder="Zipcode"
                    addon="fa fa-university"
                    onChange={this.handleZipcodeChange}/>

                <TextFieldGroup
                    field="profile_image"
                    value=""
                    label="Profile Image"
                    placeholder="Profile Image"
                    type="file"
                    addon="fa fa-image"
                    onChange={this.handleProfileimageChange}/>
                <img src={ this.props.bar.photos['profile_image'] } className="barFormProfileImage"/>

                <TextFieldGroup
                    field="images"
                    value=''
                    label="Images"
                    placeholder="Images"
                    type="file"
                    addon="fa fa-files-o"
                    onChange={this.handleImagesChange}/>

                {
                    this.props.bar.photos.images !== null ? this.props.bar.photos.images.map((item, index)=>
                        <img src={ item } width={150} alt='' className="imageList" />
                    ):(
                        <p> Loading... </p>
                    )
                }
                <br/><br/>
                <button className="btn btn-default btn-group-lg">
                    <span className="fa fa-upload"></span> Save
                </button>
            </form>
        );
        return (<p> Loading...</p>);
    }
}

export default BarForm;