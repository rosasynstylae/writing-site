import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import enhance from '../data/helpers';
import { Menu } from 'semantic-ui-react';
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'

const Header = (props) => {
    return (
        <Menu className={props.className}>
            <Menu.Item
                icon='content'
                onClick={props.handleSidebarOpen}
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

const HeaderStyled = styled(Header)`
    margin-bottom: 0 !important;
`

class HeaderContainer extends React.Component {
    componentDidMount() {
        const { firestore } = this.props;
        firestore.get('users')
    }
    
    render() {
        return (
            <Header />
        );
    }
}


const ms2p = (state) => {
    return {
        users: state.firestore.ordered.users,
    };
};

export default connect(ms2p)(withFirestore(HeaderContainer));