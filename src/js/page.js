import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

import { setSidebarVisiblity } from '../data/ui-actions';

import SidebarMenu from './sidebar';
import PageTitle from './page-title';

const InnerPage = (props) => {
    return (
        <div className={props.className} onClick={props.handleContentClick}>
            <PageTitle />
        </div>
    );
}

InnerPage.propTypes = {
    className: PropTypes.string,
};

const InnerPageStyled = styled(InnerPage)`
    height: 100%;
    width: 100%;
    padding: 20px;
`

const PagePusher = (props) => {
    return (
        <Sidebar.Pusher
            className={props.className}
            onClick={props.onSidebarClose}
        >
            <InnerPageStyled handleContentClick={props.onContentClick} />
        </Sidebar.Pusher>
    )
}

PagePusher.propTypes = {
    className: PropTypes.string,
    onSidebarClose: PropTypes.func,
    onContentClick: PropTypes.func,
};

PagePusher.defaultProps = {
    className: '',
    onSidebarClose: () => {},
    onContentClick: () => {},
}

const PagePusherStyled = styled(PagePusher)`
    height: 100%;
`

export const Page = (props) => {
    const {
        className,
        isSidebarVisible,
        onSidebarClose,
        ...contentProps
    } = props;
    const handleContentClick = isSidebarVisible ? onSidebarClose : null;
    
    return (
        <Sidebar.Pushable className={className}>
            <SidebarMenu isVisible={isSidebarVisible} />
            <PagePusherStyled
                onContentClick={handleContentClick}
                {...contentProps}
            />
        </Sidebar.Pushable>
    );
}

Page.propTypes = {
    className: PropTypes.string,
    isSidebarVisible: PropTypes.bool.isRequired,
    onSidebarClose: PropTypes.func.isRequired,
};

export const PageStyled = styled(Page)`
    margin-top: 0 !important;
    height: calc(100vh - 42px);
`

const ms2p = (state) => ({
    isSidebarVisible: state.ui.isSidebarVisible,
});

const md2p = (dispatch) => ({
    onSidebarClose: () => {
        dispatch(setSidebarVisiblity(false));
    },
});

const PageSmart = connect(ms2p, md2p)(PageStyled);
export default PageSmart;
