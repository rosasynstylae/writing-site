import React from 'react';
import get from 'lodash/get';

import { Input, Label, Select } from 'semantic-ui-react';
import styled from 'styled-components';

/* renderField:
 * A component for rendering fields for redux forms.
 * Currently only supports text-based fields.
 */
export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  className,
  extraProps,
}) => (
  <div className={className}>
    <Input
      {...input}
      {...extraProps}
      label={label}
      placeholder={get(label, 'content', label)}
      type={type}
      error={error && touched}
    />
    {touched &&
      error && (
        <Label pointing basic color="red">
          {error}
        </Label>
      )}
  </div>
);

export const renderFieldStyled = styled(renderField)`
  ${props => (props.addMargin ? 'margin: 10px 0;' : null)};
`;

/* renderSelectField:
 * A component for rendering fields for redux forms.
 * Currently only supports text-based fields.
 */
export const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error },
  className,
  extraProps,
}) => (
  <div className={className}>
    <Select
      {...input}
      {...extraProps}
      selection
      placeholder={get(label, 'content', label)}
      error={error && touched}
      onChange={(param, data) => input.onChange(data.value)}
    />
    {touched &&
      error && (
        <Label pointing basic color="red">
          {error}
        </Label>
      )}
  </div>
);

export const renderSelectFieldStyled = styled(renderSelectField)`
  ${props => (props.addMargin ? 'margin: 10px 0;' : null)};
`;
