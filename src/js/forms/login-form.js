import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message } from 'semantic-ui-react';

import { renderField } from './fields';

const LoginForm = props => {
    const { 
        handleSubmit,
        pristine,
        reset,
        submitting,
        error,
        loginError,
    } = props;
    const errorMsg = error || loginError;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Login
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'auth' // a unique identifier for this form
})(LoginForm);