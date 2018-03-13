import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';

import { PAGE_TITLES } from '../data/constants';

const PageTitle = (props) => {
    return (
        <Header as='h1'>{PAGE_TITLES[props.page]}</Header>
    );
}

PageTitle.propTypes = {
    page: PropTypes.string.isRequired,
}

const ms2p = (state) => ({
    page: state.ui.page,
});

export default connect(ms2p, () => ({}))(PageTitle);