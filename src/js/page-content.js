import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { PAGES } from '../data/constants';

import PageTitle from './page-title';

import Home from './home';

const contentComponent = {
    [PAGES.HOME.name]: <Home />,
};


/* PageContent:
 * A component used to set up the page content
 * Holds the page title and displays the content component
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * page (str, optional, default=PAGES.HOME.name):
 *     what page to render content for - use PAGES.<page>.name
 */
const PageContent = (props) => (
    <div className={props.className}>
        <PageTitle />
        { contentComponent[props.page] }
    </div>
);

PageContent.propTypes = {
    className: PropTypes.string,
    page: PropTypes.string,
};

PageContent.defaultProps = {
    page: PAGES.HOME.name,
};

const PageContentStyled = styled(PageContent)`
    height: 100%;
    width: 100%;
    padding: 20px;
`;

const ms2p = (state) => ({
    page: state.ui.page,
});

export default connect(ms2p, () => ({}))(PageContentStyled);
