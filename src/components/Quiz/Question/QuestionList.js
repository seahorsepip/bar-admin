import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class QuestionList extends Component {
    constructor(props) {
        super(props);

        this.state= {
            items:[],
            id: props.id};

        this.cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.onAfterSaveCell
        };

        this.onAfterSaveCell = this.onAfterSaveCell.bind(this);

    }

    componentDidMount(){
        fetch("http://localhost:3000/api/questions/" + this.state.id)
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

    onAfterSaveCell(row, cellName, cellValue) {

        let form = new FormData();
        console.log(row);

        form.append('questionId',row["id"]);
        form.append('text', row["text"]);
        form.append('category', row["category"]);
        //form.append('image', row["media"]);
        form.append('answer', row["answer"]);
        form.append('duration', row["duration"]);
        console.log(form)

        fetch("http://localhost:3000/api/questions/" + row.id, {
            method: 'PUT',
            body: form,

        })
            .then((result) => result.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
        console.log(row);
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.state.items} keyField="id" search keyBoardNav cellEdit={ this.cellEditProp }>
                    <TableHeaderColumn dataField="id" hidden={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
                    <TableHeaderColumn dataField="category">Category</TableHeaderColumn>
                    <TableHeaderColumn dataField="answer">Answer</TableHeaderColumn>
                    <TableHeaderColumn dataField="duration">Duration</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }
}

/*
                <div className="list-group">
                    {this.state.items.length ? this.state.items.map(item =>
                        <div>
                            <Link to={"/quiz/" + item.id} className="list-group-item" key={item.id}>
                                <h4 className="list-group-item-heading">{item.title}</h4>
                                <p className="list-group-item-text">{item.description}</p>
                            </Link>

                            <Link to={"quiz/edit/" + item.id}> Edit quiz </Link>
                        </div>): <p> Loading... </p>}
                </div>*/

export default QuestionList;