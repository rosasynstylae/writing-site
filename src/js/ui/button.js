import React from 'react';

import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLORS } from '../../data/constants';

export const GreenButton = styled(Button)`
    background: ${COLORS.GREEN} !important;
    color: ${COLORS.WHITE} !important;
    
    &:hover {
        background: ${COLORS.GREEN_DARK} !important;
    }
`;


export const RedButton = styled(Button)`
    background: ${COLORS.RED} !important;
    color: ${COLORS.WHITE} !important;
    
    &:hover {
        background: ${COLORS.RED_LIGHT} !important;
    }
`;

export default GreenButton;
