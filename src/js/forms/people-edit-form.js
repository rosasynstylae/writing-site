import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message, Form } from 'semantic-ui-react';

import { renderFieldStyled, renderSelectField } from './fields';
import { isRequired } from './validation';

import Button from '../ui/button';

import { COLORS } from '../../data/constants';

const PeopleEditForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        initialValues,
        universes,
    } = props;
    const buttonText = initialValues.name ? 'Edit' : 'Add';
    
    const universeOptions = [];
    
    for (const key in universes) {
        const universe = universes[key];
        universeOptions.push(
            {
                text: universe.name,
                value: universe.key,
            }
        );
    }
    
    return (
        <Form style={{width: '50%'}} onSubmit={handleSubmit}>
            <Field
                name="name"
                type="text"
                component={renderFieldStyled}
                label={{
                    content: "Name",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="universe"
                component={renderSelectField}
                label={{
                    content: "Universe",
                    style: { background: COLORS.THISTLE }
                }}
                input={{ fluid: true, options: universeOptions }}
                addMargin
            />
            { error && <Message error content={error} /> }
            <Button type="submit" disabled={submitting}>
                {buttonText}
            </Button>
        </Form>
    );
};

export default reduxForm({})(PeopleEditForm);
