import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class QuizForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            category: '',
            image: null,
            token: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){

    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <TextFieldGroup
                    field="title"
                    value={this.state.title}
                    label="Title"
                    placeholder="Title"
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
                    field="category"
                    value={this.state.category}
                    label="Category"
                    placeholder="Category"
                    addon="fa fa-book"
                    onChange={this.handleChange}/>
                <TextFieldGroup
                    field="image"
                    value={this.state.image}
                    label="Image"
                    placeholder="Image"
                    type="file"
                    addon="fa fa-image"
                    onChange={this.handleChange}/>
                <button className="btn btn-default btn-group-lg">
                    <span className="fa fa-cloud-upload"></span> Upload!
                </button>
            </form>
        );
    }
}

export default QuizForm;