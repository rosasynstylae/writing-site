import React from 'react';
import get from 'lodash/get';

import { Input } from 'semantic-ui-react';
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
}) => (
    <div className={className}>
        <Input
            {...input}
            label={label}
            placeholder={get(label, 'content', label)}
            type={type}
        />
        {touched && error && <span>{error}</span>}
    </div>
);

export const renderFieldStyled = styled(renderField)`
    ${ props => props.addMargin ? 'margin: 10px 0;' : null }
    ${ props => props.fullWidth 
        ? `
            width: 100%;
            .input {
                width: 100%;
            }
        `
        : null
    }
`;