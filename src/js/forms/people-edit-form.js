import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message, Form } from 'semantic-ui-react';

import { renderFieldStyled, renderSelectFieldStyled } from './fields';
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
                key,
                text: universe.name,
                value: key,
            }
        );
    }
    
    console.log(universeOptions);
    
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
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="title"
                type="text"
                component={renderFieldStyled}
                label={{
                    content: "Title",
                    style: { background: COLORS.THISTLE }
                }}
                extraProps={{ fluid: true }}
                addMargin
            />
            <Field
                name="universe"
                component={renderSelectFieldStyled}
                label={{
                    content: "Universe",
                    style: { background: COLORS.THISTLE }
                }}
                extraProps={{ fluid: true, options: universeOptions }}
                validate={[isRequired]}
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
