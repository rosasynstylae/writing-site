import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';

import { PAGES } from '../data/constants';
import { findPage } from './helpers';

/* PageTitle:
 * A component that renders a title for a page - will update automatically
 * depending on what page is in state
 */
const PageTitle = (props) => (
    <Header as='h1'>
        {findPage(props.page) ? findPage(props.page).title : null}
    </Header>
);

PageTitle.propTypes = {
    page: PropTypes.string.isRequired,
};

const ms2p = (state) => ({
    page: state.ui.page,
});

export default connect(ms2p, () => ({}))(PageTitle);