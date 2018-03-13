import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Header from './header';
import Page from './page';

const BaseLayout = (props) => (
    <div className={props.className}>
        <Header />
        <Page />
    </div>
);

BaseLayout.propTypes = {
    className: PropTypes.string,
};

const BaseLayoutStyled = styled(BaseLayout)`
    min-height: 100vh;
    width: 100vw
`;

export default BaseLayoutStyled;