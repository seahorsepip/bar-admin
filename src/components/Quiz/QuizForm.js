import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';

class QuizForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            category: '',
            image: null,
            token: '',
            id: props.id};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        let form = new FormData();
        form.append('title', this.state.title);
        form.append('description', this.state.description);
        form.append('category', this.state.category);
        form.append('image', this.state.image);

        console.log(form);

        if(this.state.id === undefined){
            fetch('http://localhost:3000/api/quizzes/', {
                method: 'POST',
                body: form
            })
                .then((result) => result.json())
                .then((json) => console.log(json))
                .catch((error) => console.log(error));
        }else{
            console.log('test');
            form.append('quizId', this.state.id)
            fetch('http://localhost:3000/api/quizzes/' + this.state.id, {
                method: 'PUT',
                body: form
            })
                .then((result) => result.json())
                .then((json) => console.log(json))
                .catch((error) => console.log(error));
        }
        this.context.router.history.push('/quiz/')
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

QuizForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default QuizForm;