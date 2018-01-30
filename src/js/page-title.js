import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const PageTitle = (props) => {
    return (
        <Header as='h1'>{props.title}</Header>
    );
}

const ms2p = (state) => {
    return {
        title: state.ui.pageTitle,
    };
}

export default connect(ms2p, () => ({}))(PageTitle);