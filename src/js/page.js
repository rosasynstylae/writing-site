import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

import { setSidebarVisiblity } from '../data/ui-actions';

import SidebarMenu from './sidebar';
import PageContent from './page-content';


/* PagePusher:
 * A component for the sidebar to "push" against. Has the content as a 
 * subcomponent
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * onSidebarClose (func):
 *     Function to call to close the sidebar
 */
const PagePusher = (props) => (
    <Sidebar.Pusher
        className={props.className}
        onClick={props.onSidebarClose}
    >
        <PageContent />
    </Sidebar.Pusher>
);

PagePusher.propTypes = {
    className: PropTypes.string,
    onSidebarClose: PropTypes.func,
};

PagePusher.defaultProps = {
    className: '',
    onSidebarClose: null,
}

const PagePusherStyled = styled(PagePusher)`
    height: 100%;
`


/* Page:
 * A component that represents a "page" in the system. Holds the content
 * the user is currently viewing, and the sidebar
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * onSidebarClose (func):
 *     Function to call to close the sidebar
 * isSidebarVisible (bool, optional, default=False):
 *     Whether or not the sidebar is currently visible - used to determine if
 *     clicking on the content closes the sidebar or not.
 */
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
                onSidebarClose={handleContentClick}
                {...contentProps}
            />
        </Sidebar.Pushable>
    );
}

Page.propTypes = {
    className: PropTypes.string,
    isSidebarVisible: PropTypes.bool,
    onSidebarClose: PropTypes.func.isRequired,
};

Page.defaultProps = {
    isSidebarVisible: false,
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

export default connect(ms2p, md2p)(PageStyled);
