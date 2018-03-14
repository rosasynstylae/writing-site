import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirebase, withFirestore } from 'react-redux-firebase';

import { Menu, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { setSidebarVisiblity } from '../data/ui-actions';

import TextHeader from './ui/header';

/* Header:
 * A component that works as a header for the site
 * Holds things such as the user options menu and the sidebar toggle
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * firebase (obj):
 *     Firebase information/functionality. Passed by withFirebase.
 * onSidebarToggle (func):
 *     A function that toggles sidebar visibility.
 * isSidebarVisible (bool):
 *     Whether or not the sidebar is currently visible.
 * profile (obj, optional):
 *     The profile information from firebase.
 */
const Header = (props) => {
    const {
        className,
        firebase,
        onSidebarToggle,
        isSidebarVisible,
        profile,
    } = props;
    // FIXME - better way to do this??
    // This clears out the passed event object, which binding does not do
    const handleSidebarToggle = () => {
        onSidebarToggle(!isSidebarVisible);
    };
    
    // handle logout
    const logout = () => {
        firebase.logout();
    };
    
    const displayName = profile.displayName || profile.email || 'User';
    
    props.listUsers();
    
    return (
        <Menu className={className}>
            <Menu.Item
                icon='content'
                onClick={handleSidebarToggle}
            />
            <Menu.Item>
                <TextHeader fontSize='1em'>Literatura Continens</TextHeader>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Icon name='user' />
                    { displayName }
                </Menu.Item>
                <Menu.Item onClick={logout}>
                    Logout
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

Header.propTypes = {
    onSidebarToggle: PropTypes.func.isRequired,
    isSidebarVisible: PropTypes.bool.isRequired,
    firebase: PropTypes.shape({
        logout: PropTypes.func,
    }).isRequired,
    profile: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string,
    }),
    className: PropTypes.string,
};

Header.defaultProps = {
    profile: {},
    className: '',
};


const HeaderStyled = styled(Header)`
    margin-bottom: 0 !important;
`;


const ms2p = (state) => ({
    isSidebarVisible: state.ui.isSidebarVisible,
    profile: state.firebase.profile,
});

const md2p = (dispatch, ownProps) => ({
    onSidebarToggle: (isVisible) => {
        dispatch(setSidebarVisiblity(isVisible));
    },
    listUsers: () => {
        const { firestore } = ownProps;
        firestore.get('users/w24Bnosw4Zg2GGzv6m96X8PhR1F2');
    },
});

export default withFirestore(connect(ms2p, md2p)(withFirebase(HeaderStyled)));
