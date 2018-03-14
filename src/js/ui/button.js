import React from 'react';

import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLORS } from '../../data/constants';

export default styled(Button)`
    background: ${COLORS.GREEN} !important;
    color: ${COLORS.WHITE} !important;
`;
