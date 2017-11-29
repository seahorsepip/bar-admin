import React, {Component} from 'react';
import DropzoneComponent from 'react-dropzone-component';
import PropTypes from 'prop-types';

export default class Dropzone extends Component {

    static propTypes = {
        addedFile: PropTypes.func.isRequired,
        removedFile: PropTypes.func.isRequired,
        init: PropTypes.func
    };
    componentConfig = {
        iconFiletypes: ['.mp3', '.mp4', '.flac'],
        showFiletypeIcon: true,
        postUrl: 'if you get here, you are a faggot'
    };
    eventHandlers = {addedfile: this.props.addedFile, removedfile: this.props.removedFile, init: this.props.init};

    djsConfig = {autoProcessQueue: false, addRemoveLinks: true, acceptedFiles: 'audio/mp3,video/mp4,audio/flac'};

    render() {

        return (
            <DropzoneComponent config={this.componentConfig}
                               eventHandlers={this.eventHandlers}
                               djsConfig={this.djsConfig}/>
        )
    }
    ;
}