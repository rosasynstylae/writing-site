import React from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';

import LoginForm from './forms/login-form';

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
    
    return (
        <div>
            <LoginForm onSubmit={login} />
        </div>
    );
};

Auth.propTypes = {
    firebase: PropTypes.object.isRequired,
};

export default withFirebase(Auth);
