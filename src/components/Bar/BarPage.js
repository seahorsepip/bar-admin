import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { fetchAllBars } from './BarUtils';
import EventList from "./Event/EventList";

class BarPage extends Component {
    constructor() {
        super();

        this.state = {
            barList: null
        };
    }

    componentDidMount(){
        fetchAllBars()
            .then(response => {
                this.setState({ barList: response.data });
            })
    }


    render() {
        const { barList } = this.state;
        console.log(this.state.barList);

        //TODO: Fix rows if more than 4 bars
        if (barList)
        return (
            <div>
                <h1>Bar Management</h1>
                <Row>
                    {
                        barList !== null ? barList.map((item, index)=>
                        <BarCard key={ index } id={ item.id } name={ item.name } image={ item.photos['profile_image'] } />
                        ):(
                        <p> Loading... </p>
                        )
                    }
                </Row>
                <hr/>
                <Link to="/bar/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new bar
                </Link>
                <h2 className="d-inline-block align-middle">Events</h2>
                <Link to="/event/new" className="btn btn-dark ml-3 d-inline-block">
                    <span className="glyphicon glyphicon-th-list"></span> Add new
                </Link>
                <EventList/>
            </div>
        );
        return <p> Loading... </p>
    }
}

class BarCard extends Component {

    handleCardClick = (e, id) => {
        window.location.href= "/bar/new/" + id;
    };

    render() {
        return (
            <Col sm="3">
                <Card inverse onClick={ ((e) => this.handleCardClick(e, this.props.id)) }  className="bar-card">
                    <CardImg width="100%" src={ this.props.image } />
                    <CardImgOverlay>
                        <CardTitle className="card-title-bg">{ this.props.name }</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Col>
        );
    }
}

export default BarPage;