import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class BarPage extends Component {
    constructor() {
        super();
        this.state = {
            barList: null
        };
        this.fetchBars.bind(this);
        this.fetchBars();
    }

    render() {
        const { barList } = this.state;
        //console.log(barList);
        if (barList !== null)
        return (
            <div>
                <h1>Bar Management</h1>
                <Row>
                    {
                        barList !== null ? barList.map(bar =>{
                            console.log(bar.photos);
                                <BarCard name={ bar.name } />
                            }
                        ):(
                            <p> Loading... </p>
                        )
                    }
                </Row>
                <hr/>
                <Link to="/bar/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new bar
                </Link>
            </div>
        );
        return <p> Loading... </p>
    }

    fetchBars() {
        axios.get('http://localhost:3000/api/bars')
            .then(function (response) {
                if (response.status == 200) {
                    this.setState({ barList: response.data });
                } else {
                    return false;
                }
            }.bind(this))
            .catch(function (response) {
                if (response.status !== 200) {
                    //No OK
                    return false;
                }
            })
    }
}

class BarCard extends Component {
    render() {
        return (
            <Col sm="3">
                <Card inverse>
                    <CardImg width="100%" src='' />
                    <CardImgOverlay>
                        <CardTitle className="card-title-bg">{ this.props.name }</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Col>
        );
    }
}

export default BarPage;