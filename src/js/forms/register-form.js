import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message } from 'semantic-ui-react';

import { renderFieldStyled } from './fields';
import { isRequired, isMinLength } from './validation';

import Button from '../ui/button';

import { COLORS } from '../../data/constants';
// This is defined here so that the fields don't re-register and remove errors,
// as the fields will do so if the function refs are not equal
const isMinLength6 = isMinLength(6);

const RegisterForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        registerError,
    } = props;
    const errorMsg = error || registerError;
    
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
                validate={[isRequired, isMinLength6]}
                addMargin
            />
            <Field
                name="password_retype"
                type="password"
                component={renderFieldStyled}
                label={{
                    content: "Retype Password",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true }}
                validate={[isRequired, isMinLength6]}
                addMargin
            />
            <Field
                name="name"
                type="text"
                component={renderFieldStyled}
                label={{
                    content: "Name",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true }}
                addMargin
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <Button type="submit" disabled={submitting}>
                Register
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'register' // a unique identifier for this form
})(RegisterForm);
