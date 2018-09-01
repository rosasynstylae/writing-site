import React from 'react';

import styled from 'styled-components';

import { COLORS } from '../../data/constants';

export default styled.span`
  color: ${COLORS.GREEN} !important;

  &:hover {
    font-style: italic;
    cursor: pointer;
  }
`;
