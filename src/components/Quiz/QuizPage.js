import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
//components
import QuizList from './QuizList';

class QuizPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="d-inline-block align-middle">Pubquiz</h1>
                    <Link to="/quiz/new" className="btn btn-dark ml-3 d-inline-block">
                        <span className="glyphicon glyphicon-th-list"></span> Add new
                    </Link>
                </div>
                <QuizList />
            </div>
        );
    }
}

export default QuizPage;