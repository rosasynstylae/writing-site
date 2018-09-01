import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Message, Form } from 'semantic-ui-react';

import { renderFieldStyled } from './fields';
import { isRequired } from './validation';

import Button from '../ui/button';

import { COLORS } from '../../data/constants';

const UniverseEditForm = props => {
  const { handleSubmit, submitting, error, initialValues } = props;
  const buttonText = initialValues.name ? 'Edit' : 'Add';

  return (
    <Form style={{ width: '50%' }} onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={renderFieldStyled}
        label={{
          content: 'Name',
          style: { background: COLORS.THISTLE },
        }}
        extraProps={{ fluid: true }}
        validate={[isRequired]}
        addMargin
      />
      <Field
        name="description"
        type="text"
        component={renderFieldStyled}
        label={{
          content: 'Description',
          style: { background: COLORS.THISTLE },
        }}
        extraProps={{ fluid: true }}
        addMargin
      />
      {error && <Message error content={error} />}
      <Button type="submit" disabled={submitting}>
        {buttonText}
      </Button>
    </Form>
  );
};

export default reduxForm({})(UniverseEditForm);
