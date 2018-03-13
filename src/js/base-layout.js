import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

import styled from 'styled-components';

import Header from './header';
import Page from './page';
import Auth from './auth';

class BaseLayout extends React.Component {
    componentDidMount() {
        this.props.firebase.login({
            email: 'test@example.com',
            password: 'passwd',
        });
        // this.props.firebase.logout();
    }
    
    render() {
        const { auth, className } = this.props;
        const DisplayComponent = isLoaded(auth) && isEmpty(auth) 
            ? <Auth />
            : (
                <React.Fragment>
                    <Header />
                    <Page />
                </React.Fragment>
            );
        
        console.log(isLoaded(auth));
        console.log(isEmpty(auth));
        return (
            <div className={className}>
                { DisplayComponent }
            </div>
        );
    }
}

BaseLayout.propTypes = {
    className: PropTypes.string,
};

const BaseLayoutStyled = styled(BaseLayout)`
    min-height: 100vh;
    width: 100vw
`;

const ms2p = ({ firebase: { auth } }) => ({ auth });

export default connect(ms2p, () => ({}))(withFirebase(BaseLayoutStyled));