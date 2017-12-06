import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

// Components
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './NavigationBar';
import SideNavigationBar from './SideNavigationBar';


const MainLayout = ({component: Component, ...rest}) => {
    return (
      <Route exact {...rest} render={matchProps =>(
        <div>
            <NavigationBar />
            <Container fluid>
                <main>
                <Row>
                    <Col sm="3" md="2" xl="1" className="sidebar">
                    <SideNavigationBar />
                    </Col>
                    <Col sm="9" md="10" xl="11" className="ml-sm-auto p-4">
                    <Component {...matchProps} />
                    </Col>
                </Row>
                </main>
            </Container>
        </div>
      )} />
    )
  };

export default MainLayout;
