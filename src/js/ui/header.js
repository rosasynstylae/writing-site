import React from 'react';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLORS } from '../../data/constants';

export default styled(Header)`
  font-family: 'Special Elite' !important;
  ${props =>
    props.fontSize ? `font-size: ${props.fontSize} !important;` : null};
`;
