import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import LoginForm from '../forms/login-form';
import Header from '../ui/header';

/* getLoginErrorMsg:
 * This function returns an error message given an error.
 *
 * Args:
 * error (obj):
 *    the error as an object. Must have a key of 'code', otherwise default error
 *    message will be displayed.
 */
const getLoginErrorMsg = (error) => {
    switch(error.code) {
        case 'auth/wrong-password':
        case 'auth/invalid-email':
        case 'auth/user-not-found':
            return 'Could not verify credentials. Please check your email and password and try again.';
        case 'auth/too-many-requests':
            return 'Too many attempts to login. Please wait a few minutes and try again.';
        default:
            return 'There was a problem logging in. Please try again.';
    }
};


/* AuthLogin:
 * A component that holds the login content
 *
 * Props:
 * firebase (obj):
 *     Firebase information/functionality. Passed by withFirebase.
 */
const AuthLogin = (props) => {
    const login = (values) => {
        const { email, password } = values;
        
        props.firebase.login({ email, password });
    };
    
    // Fixme - look into hooking up react-redux-firebase to redux-forms
    // for error handling; this is a little janky
    const loginError = props.authError 
        ? getLoginErrorMsg(props.authError) 
        : null;
    
    return (
        <React.Fragment>
            <Header as='h2'>Please Login</Header>
            <LoginForm onSubmit={login} loginError={loginError} />
        </React.Fragment>
    );
}

AuthLogin.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func,
    }).isRequired,
    authError: PropTypes.shape({
        code: PropTypes.string,
    }),
};

const ms2p = ({ firebase: { authError } }) => ({ authError });

export default connect(ms2p, () => ({}))(withFirebase(AuthLogin));
