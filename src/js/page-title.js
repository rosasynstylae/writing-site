import React from 'react';
import PropTypes from 'prop-types';

import { PAGES } from '../data/constants';
import { findPage } from './helpers';

import Header from './ui/header';

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

export default PageTitle;
