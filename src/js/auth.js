import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import LoginForm from './forms/login-form';

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

/* Auth:
 * A component that holds the login/register content
 *
 * Props:
 * firebase (obj):
 *     Firebase information/functionality. Passed by withFirebase.
 */
const Auth = (props) => {
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
        <div>
            <LoginForm onSubmit={login} loginError={loginError} />
        </div>
    );
};

Auth.propTypes = {
    firebase: PropTypes.object.isRequired,
};

const ms2p = ({ firebase: { authError } }) => ({ authError });

export default connect(ms2p, () => ({}))(withFirebase(Auth));
