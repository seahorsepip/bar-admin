import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import LoginForm from './LoginForm';

class LoginPage extends Component {
    render() {
        return (
                <Card body className="login-card">
                        <CardTitle>Log In</CardTitle>
                        <LoginForm />
                        <CardText className="text-center mt-2">
                        <small className="text-muted">or <a href="http://maatwerk.works/register">Register</a></small>
                      </CardText>
                </Card>
        );
    }
}

export default LoginPage;