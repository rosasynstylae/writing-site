import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message } from 'semantic-ui-react';

import { renderFieldStyled } from './fields';
import { isRequired } from './validation';

import Button from '../ui/button';

import { COLORS } from '../../data/constants';

const LoginForm = props => {
    const { 
        handleSubmit,
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
                component={renderFieldStyled}
                label={{
                    content: "Email",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="password"
                type="password"
                component={renderFieldStyled}
                label={{
                    content: "Password",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <Button type="submit" disabled={submitting}>
                Login
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'auth' // a unique identifier for this form
})(LoginForm);