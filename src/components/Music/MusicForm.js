import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import Dropzone from "../common/Dropzone";

export default class MusicForm extends Component {
    myDropzone = {};

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genre: '',
            items: [],
            token: '45feb57ce42182121f336647b89701ced9da43aa'
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

    handleSubmit(event) {
        event.preventDefault();
        let url = 'http://music.maatwerk.works/api/songs/';
        fetch(url, this.getSettings()).then(res => this.setState({status: res.status}))
            .catch(error => console.log(error));
    }

    getSettings() {
        return {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(this.state.items)
        };
    }

    getHeaders() {
        const header = new Headers();
        header.append('content-type', 'application/json');
        header.append('authorization', 'Bearer ' + this.state.token);
        return header;
    }

    addedFile(file) {
        if (!file.type.match(/audio/g) && !file.type.match(/video/g)) return this.myDropzone.removeFile(file);
        window.jsmediatags.read(file, {
            onSuccess: function (info) {
                let alreadyExists = false;
                this.state.items.forEach(song => {
                    if (song.name === info.tags.title
                        && song.album === info.tags.album
                        && song.artist === info.tags.artist) {
                        alreadyExists = true;
                        this.myDropzone.removeFile(file);
                    }
                });

                if (!alreadyExists) this.state.items.push({
                    name: info.tags.title,
                    album: info.tags.album,
                    artist: info.tags.artist
                });
            }.bind(this)
        });

    }

    removedFile(file) {
        let items = this.state.items;
        window.jsmediatags.read(file, {
            onSuccess: function (info) {
                items = items.filter(item => item.name !== info.tags.title
                    && item.album !== info.tags.album
                    && item.artist !== info.tags.artist);
                this.setState({items});
            }.bind(this)
        });
    }

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.8.2/jsmediatags.min.js";
        script.async = true;

        document.body.appendChild(script);
    } //actual cancer. Forgive me Bob, but there is *literally* 0 react alternatives.

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                {this.state.status === 201 && <div className="alert alert-success">Successfully submitted songs!</div>}
                {this.state.status === 400 && <div className="alert alert-danger">Please fill in all fields.</div>}
                <TextFieldGroup
                    field="token"
                    value={this.state.token}
                    label="Token"
                    addon="fa fa-image"
                    onChange={this.handleChange}/>
                <Dropzone options ={['.mp3', '.mp4', '.flac']} acceptedFiles={'audio/mp3,video/mp4,audio/flac'} addedFile={this.addedFile.bind(this)} removedFile={this.removedFile.bind(this)}
                          init={this.initDropzone.bind(this)}/>
                <button className="btn btn-dark ml-3 d-inline-block">
                    <span className="fa fa-upload"/> upload
                </button>
            </form>
        );
    }
}