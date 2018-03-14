import React from 'react';

import { Input, Header } from 'semantic-ui-react';

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <Header size='small'>{label}</Header>
        <div>
            <Input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);