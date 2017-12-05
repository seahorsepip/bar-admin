import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom'
import MusicForm from './MusicForm';

export default class AddMusicPage extends Component {

    render() {
        return (
            <div>
                <Link to="/music/library" className="btn btn-sm btn-secondary">back</Link>
                <hr/>
                <h1>Add new Songs</h1>
                <Row>
                    <Col lg="6">
                        <MusicForm/>
                    </Col>
                </Row>
            </div>
        );
    }
}