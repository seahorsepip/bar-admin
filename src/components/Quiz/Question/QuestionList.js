import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class QuestionList extends Component {
    constructor(props) {
        super(props);

        this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
        this.onAfterInsertRow = this.onAfterInsertRow.bind(this);

        let token = JSON.parse(localStorage.getItem('token'));

        this.state= {
            items: [],
            token: token.access_token
        };

        this.options  = {
            cellEdit: this.cellEditProp,
            afterDeleteRow: this.onAfterDeleteRow,
            afterInsertRow: this.onAfterInsertRow
        };

        this.cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.onAfterSaveCell
        };

        this.selectRowProp = {
            mode: 'checkbox'
        };
    }

    //Get initial data
    componentDidMount(){
        fetch("http://localhost:3000/api/questions/" + this.props.id)
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



    //Insert a new row with values
    onAfterInsertRow(row){

        let form = new FormData();
        form.append('text', row["text"]);
        form.append('category', row["category"]);
        form.append('image', row["media"]);
        form.append('answer', row["answer"]);
        form.append('duration', row["duration"]);
        form.append('quizId', this.props.id);

        fetch("http://localhost:3000/api/questions/" + this.props.id, {
            method: 'POST',
            body: form,
            headers: {'Authorization': 'Bearer ' + this.state.token}

        })
            .then(result => result.json())
            .then(json => {
                console.log(json)
                /*this.state.items.map(question => {
                    if(question.id === row.id) question.id = json.id;
                });
                this.setState(this.state);*/
            })
            .catch((error) => console.log(error));


    };

    //Delete row from database
    onAfterDeleteRow(row) {
        fetch("http://localhost:3000/api/questions/" + row, {
            method: 'DELETE',
            headers: {'Authorization': 'Bearer ' + this.state.token}
        })
            .then((result) => result.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
    }

    //Update row in database
    onAfterSaveCell(row) {
        let form = new FormData();

        form.append('questionId',row["id"]);
        form.append('text', row["text"]);
        form.append('category', row["category"]);
        form.append('image', row["media"]);
        form.append('answer', row["answer"]);
        form.append('duration', row["duration"]);
        form.append('quizId', this.props.id);


        fetch("http://localhost:3000/api/questions/" + row.id, {
            method: 'PUT',
            body: form,
            headers: {'Authorization': 'Bearer ' + this.state.token}
        })
            .then((result) => result.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
    };


    render() {
        return (
            <div>
                <BootstrapTable data={this.state.items} selectRow={this.selectRowProp}  cellEdit={this.cellEditProp} deleteRow = {true} insertRow={true} options={this.options} search keyBoardNav>
                    <TableHeaderColumn dataField="id" hidden={true} isKey={true} autoValue={true}>Text</TableHeaderColumn>
                    <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
                    <TableHeaderColumn dataField="category">Category</TableHeaderColumn>
                    <TableHeaderColumn dataField="answer">Answer</TableHeaderColumn>
                    <TableHeaderColumn dataField="duration">Duration</TableHeaderColumn>
                </BootstrapTable>
                <Link className="btn btn-default btn-group-lg" to={'/quiz/play/' + this.state.id}>
                    <span className="fa fa-cloud-upload"></span> Play!
                </Link>
            </div>
        );
    }
}


export default QuestionList;