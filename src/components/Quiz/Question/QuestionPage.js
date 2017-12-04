import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

//components
import QuestionList from "./QuestionList";

class QuizPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="d-inline-block align-middle">Pubquiz questions</h1>
                </div>
                <QuestionList id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default QuizPage;