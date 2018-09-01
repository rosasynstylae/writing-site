import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { setRegistering } from '../../data/ui-actions';

import AuthLogin from './auth-login';
import AuthRegister from './auth-register';
import Header from '../ui/header';
import Link from '../ui/span-link';

import backgroundImg from '../../images/typewriter1280.jpg';

const AuthToggleInfo = props => {
  const toggleText = props.isRegistering
    ? 'Already have an account'
    : 'New to Literatura Continens';
  const spanText = props.isRegistering ? 'Login Here' : 'Register Now';

  const handleAuthInfoToggle = () => {
    props.onAuthInfoToggle(!props.isRegistering);
  };

  return (
    <div className={props.className}>
      {toggleText}? <Link onClick={handleAuthInfoToggle}>{spanText}!</Link>
    </div>
  );
};

const AuthToggleInfoStyled = styled(AuthToggleInfo)`
  margin: 10px 0;
`;

/* Auth:
 * A component that holds the login/register content
 *
 * Props:
 * auth (obj):
 *     The auth page ui information
 */
const Auth = props => {
  const authInfo = props.auth.isRegistering ? <AuthRegister /> : <AuthLogin />;

  return (
    <div className={props.className}>
      <Header as="h1">Literatura Continens</Header>
      {authInfo}
      <AuthToggleInfoStyled
        isRegistering={props.auth.isRegistering}
        onAuthInfoToggle={props.onAuthInfoToggle}
      />
    </div>
  );
};

Auth.propTypes = {
  auth: PropTypes.shape({
    isRegistering: PropTypes.bool,
  }),
  onAuthInfoToggle: PropTypes.func,
};

const AuthStyled = styled(Auth)`
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  width: 425px;
`;

const ms2p = ({ ui: { auth } }) => ({ auth });
const md2p = dispatch => ({
  onAuthInfoToggle: isRegistering => {
    dispatch(setRegistering(isRegistering));
  },
});

const AuthSmart = connect(
  ms2p,
  md2p,
)(AuthStyled);

const AuthContainer = props => {
  const { className, ...authProps } = props;

  return (
    <div className={className}>
      <AuthSmart {...authProps} />
    </div>
  );
};

const AuthContainerStyled = styled(AuthContainer)`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImg});
  background-size: cover;
`;

export default AuthContainerStyled;
