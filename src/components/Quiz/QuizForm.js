import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';
import Dropzone from '../common/Dropzone';

class QuizForm extends Component {

    constructor(props){
        super(props);

        let token = JSON.parse(localStorage.getItem('token'));

        this.state = {
            title: '',
            description: '',
            category: '',
            image: null,
            token: '',
            id: props.id,
            file: null,
            token: token.access_token
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initDropzone(dropzone) {
        this.myDropzone = dropzone
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
        form.append('file', this.state.file)

        console.log(form);

        if(this.state.id === undefined){
            fetch('http://localhost:3000/api/quizzes/', {
                method: 'POST',
                body: form,
                headers: {'Authorization': 'Bearer ' + this.state.token}
            })
                .then((result) => result.json())
                .then((json) => console.log(json))
                .catch((error) => console.log(error));
        }else{
            console.log('test');
            form.append('quizId', this.state.id)
            fetch('http://localhost:3000/api/quizzes/' + this.state.id, {
                method: 'PUT',
                body: form,
                headers: {'Authorization': 'Bearer ' + this.state.token}
            })
                .then((result) => result.json())
                .then((json) => console.log(json))
                .catch((error) => console.log(error));
        }
        this.context.router.history.push('/quiz/')
    }

    addedFile(file) {
        if (!file.type.match(/image/g)) return this.myDropzone.removeFile(file);
        this.state.file = file;
        console.log(this.state.file)
    };

    removedFile(file) {
        this.setState({file: null});
        console.log(this.state.file)
    };

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
                 <Dropzone options={['.jpg', '.png']} acceptedFiles={'image/png, image/jpeg'} addedFile={this.addedFile.bind(this)} removedFile={this.removedFile.bind(this)}
                           init={this.initDropzone.bind(this)}/>
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