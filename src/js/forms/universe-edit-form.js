import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message, Form } from 'semantic-ui-react';

import { renderFieldStyled } from './fields';
import { isRequired } from './validation';

import Button from '../ui/button';

import { COLORS } from '../../data/constants';

const UniverseEditForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        initialValues,
    } = props;
    const buttonText = initialValues.name ? 'Edit' : 'Add';
    
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                name="name"
                type="text"
                component={renderFieldStyled}
                label={{
                    content: "Name",
                    style: { background: COLORS.THISTLE }
                }}
                validate={[isRequired]}
                addMargin
                fullWidth
            />
            <Field
                name="description"
                type="text"
                component={renderFieldStyled}
                label={{
                    content: "Description",
                    style: { background: COLORS.THISTLE }
                }}
                addMargin
                fullWidth
            />
            { error && <Message error content={error} /> }
            <Button type="submit" disabled={submitting}>
                {buttonText}
            </Button>
        </Form>
    );
};

export default reduxForm({})(UniverseEditForm);
