import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardColumns, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


class QuizList extends Component {
    constructor() {
        super();
        this.state={items:[]};
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/quizzes/")
            .then(res => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({ items: data });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <CardColumns>
                {this.state.items.length ? this.state.items.map(item =>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <Link to={"quiz/" + item.id}>
                                    <CardTitle> {item.title} </CardTitle>
                                    <CardText> {item.description} </CardText>
                                </Link>
                                <Link to={"quiz/edit/" + item.id}  className="btn btn-outline-secondary d-inline-block">
                                    <span className="glyphicon glyphicon-th-list"></span> Edit quiz
                                </Link>
                            </CardBody>
                        </Card>
                    ): <p> Loading... </p>}
                </CardColumns>
            </div>
        );
    }
}

export default QuizList;