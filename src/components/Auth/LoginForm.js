import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { logIn } from '../../actions/authActions';
import { connect } from 'react-redux';
import validateInput from '../../utils/validations/login';

import TextFieldGroup from '../common/TextFieldGroup';
import {Button, Form, Alert } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        if(this.props.isAuthenticated) {
            this.context.router.history.push('/');
        }
    }

    componentWillUpdate(nextProps) {
        if(nextProps.isAuthenticated) {
            this.context.router.history.push('/');
        }
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({ errors: {}, isLoading: true });
            this.props.logIn(this.state).then(
                (res) => {
                    console.log('routing');
                    this.context.router.history.push('/');
                }
            )
            .catch((error) => {
                const errors = this.state.errors;
                errors.form = "Bad login credentials";
                this.setState({ errors: errors, isLoading: false });
            });
        }
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors, username, password, isLoading, mailSend } = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        field="username"
                        value={username}
                        label="Username"
                        error={errors.username}
                        addon="fa fa-user"
                        onChange={this.onChange} />
                    <TextFieldGroup
                        field="password"
                        value={password}
                        label="Password"
                        error={errors.password}
                        type="password"
                        addon="fa fa-key"
                        text="Forgot your password?"
                        textLink="/user/account-recovery"
                        onChange={this.onChange} />
                    <Button
                        disabled={isLoading}
                        color="primary"
                        block >
                        Submit
                    </Button>
                    { errors.form &&
                    <Alert style={{marginTop: 20}} color="danger">
                        {errors.form}
                    </Alert> }
                </Form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default  connect(mapStateToProps, { logIn })(LoginForm);