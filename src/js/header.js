import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

import { setSidebarVisiblity } from '../data/ui-actions';

/* Header:
 * A component that works as a header for the site
 * Holds things such as the user options menu and the sidebar toggle
 */
const Header = (props) => {
    // FIXME - better way to do this??
    // This clears out the passed event object, which binding does not do
    const handleSidebarToggle = () => {
        props.onSidebarToggle(!props.isSidebarVisible);
    };
    
    return (
        <Menu className={props.className}>
            <Menu.Item
                icon='content'
                onClick={handleSidebarToggle}
            />
            <Menu.Item>
                Literatura Continens
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    User Stuff
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

Header.propTypes = {
    onSidebarToggle: PropTypes.func.isRequired,
    isSidebarVisible: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

Header.defaultProps = {
    className: '',
}

const HeaderStyled = styled(Header)`
    margin-bottom: 0 !important;
`

/* HeaderContainer:
 * A container for the header that initializes user data and passes along
 * information from state
 */
class HeaderContainer extends React.Component {
    componentDidMount() {
        const { firestore } = this.props;
        firestore.get('users');
    }
    
    render() {
        return (
            <HeaderStyled {...this.props} />
        );
    }
}


const ms2p = (state) => ({
    users: state.firestore.ordered.users,
    isSidebarVisible: state.ui.isSidebarVisible,
});

const md2p = (dispatch) => ({
    onSidebarToggle: (isVisible) => {
        dispatch(setSidebarVisiblity(isVisible));
    },
});

export default connect(ms2p, md2p)(withFirestore(HeaderContainer));