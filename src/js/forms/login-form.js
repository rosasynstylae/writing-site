import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderField } from './fields';

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
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