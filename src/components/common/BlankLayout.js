import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

//components
import { Container } from 'reactstrap';

const BlankLayout = ({component: Component, ...rest}) => {
    return (
      <Route exact {...rest} render={matchProps => (
            <Container fluid>
                    <Component {...matchProps} />
            </Container>
      )} />
    )
  };

export default BlankLayout;
