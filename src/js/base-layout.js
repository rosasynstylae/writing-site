import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

import styled from 'styled-components';

import Header from './header';
import Page from './page';
import AuthPage from './auth/auth-page';

import { COLORS } from '../data/constants';

import backgroundImg from '../images/photography1280.jpg';

        // const { firestore } = this.props;
        // firestore.get('users');
        
        // withFirestore(Component)

/* BaseLayout:
 * A component that handles laying out the page, as well as deciding whether or
 * not to show auth instead
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * auth (obj):
 *     an object holding the auth info from firebase
 */
const BaseLayout = (props) => {
    const { auth, className } = props;
    // determine whether we should show content, or the login/register info
    const DisplayComponent = isLoaded(auth) && isEmpty(auth) 
        ? <AuthPage />
        : (
            <React.Fragment>
                <Header />
                <Page />
            </React.Fragment>
        );
    
    return (
        <div className={className}>
            { DisplayComponent }
        </div>
    );
}

BaseLayout.propTypes = {
    className: PropTypes.string,
    auth: PropTypes.shape({
        isEmpty: PropTypes.bool,
        isLoaded: PropTypes.bool,
    }).isRequired
};

const BaseLayoutStyled = styled(BaseLayout)`
    min-height: 100vh;
    width: 100%;
    /* faking background color "tint" with gradient */ 
    background:
        linear-gradient(
          rgba(255, 255, 255, 0.8), 
          rgba(255, 255, 255, 0.8)
        ),
        url(${backgroundImg});
    background-size: cover;
`;

const ms2p = ({ firebase: { auth } }) => ({ auth });

export default connect(ms2p, () => ({}))(BaseLayoutStyled);
