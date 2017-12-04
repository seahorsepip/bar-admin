import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import QuizForm from './QuizForm';

class AddQuizPage extends Component {



    render() {
        return (
            <div>
                <Link to="/quiz" className="btn btn-sm btn-secondary">back</Link>
                <hr />
                {this.props.match.params.id ? <h1> Edit an existing quiz </h1> : <h1> Add a new quiz </h1>}
                <Row>
                    <Col lg="6">
                        <QuizForm id={this.props.match.params.id}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AddQuizPage;