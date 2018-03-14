import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

import styled, { injectGlobal } from 'styled-components';

import Header from './header';
import Page from './page';
import Auth from './auth';

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
        ? <Auth />
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
    width: 100vw;
`;

const ms2p = ({ firebase: { auth } }) => ({ auth });

export default connect(ms2p, () => ({}))(BaseLayoutStyled);

/* Below are some site-wide stylings
 * FIXME - where should this go? Is this replaceable with theming from
 * styled components?
 */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Special+Elite');
`;
