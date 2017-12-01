import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { fetchAllBars } from './BarUtils';

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

        if (barList)
        return (
            <div>
                <h1>Bar Management</h1>
                <Row>
                    {
                        barList !== null ? barList.map((item, index)=>
                            <BarCard key={ index } name={ item.name } image={ item.photos['profile_image'] } />
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
}

class BarCard extends Component {
    render() {
        return (
            <Col sm="3">
                <Card inverse>
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