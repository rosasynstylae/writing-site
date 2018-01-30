import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Menu } from 'semantic-ui-react';

const Header = (props) => {
    // props.init();
    
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

export default HeaderStyled;

// const ms2p = (state) => {
//     return {
//         users: state.firestore.ordered.users,
//     };
// };

// const md2p = (dispatch, getState, getFirebase) => {
//     return {
//         init: () => {
//             const firebase = getFirebase();
//             print(firebase.collection('users').get());
//         },
//     };
// }

// export default compose(
//     firestoreConnect({ collection: 'users' }), // or { collection: 'todos' }
//     connect(ms2p, md2p)
// )(HeaderStyled);