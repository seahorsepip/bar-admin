import React, { Component } from 'react';

class QuizList extends Component {
    constructor() {
        super();
        this.state={items:[]};
    }

    componentDidMount(){
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {this.state.items.length ? this.state.items.map(item =>
                        <a href={"/Quiz/" + item.id} className="list-group-item" key={item.id}>
                            <h4 className="list-group-item-heading">{item.title}</h4>
                            <p className="list-group-item-text">{item.description}</p>
                        </a>): <p> Loading... </p>}
                </div>
            </div>
        );
    }
}

export default QuizList;