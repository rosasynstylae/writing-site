import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { SubmissionError } from 'redux-form';

import RegisterForm from '../forms/register-form';
import Header from '../ui/header';

/* getRegisterErrorMsg:
 * This function returns an error message given an error.
 *
 * Args:
 * error (obj):
 *    the error as an object. Must have a key of 'code', otherwise default error
 *    message will be displayed.
 */
const getRegisterErrorMsg = error => {
  switch (error.code) {
    case 'auth/weak-password':
      return error.message;
    case 'auth/too-many-requests':
      return 'Too many attempts to register. Please wait a few minutes and try again.';
    default:
      return 'There was a problem registering. Please try again.';
  }
};

/* AuthRegister:
 * A component that holds the register content
 *
 * Props:
 * firebase (obj):
 *     Firebase information/functionality. Passed by withFirebase.
 */
const AuthRegister = props => {
  const register = values => {
    const { email, password, password_retype, displayName } = values;

    // Check that the passwords match
    if (password != password_retype) {
      console.log(password);
      const msg = 'Passwords do not Match';
      throw new SubmissionError({
        password: msg,
        password_retype: msg,
        _error:
          'Registration Failed. Please check your information and try again.',
      });
    }

    props.firebase.createUser({ email, password }, { displayName });
  };

  // Fixme - look into hooking up react-redux-firebase to redux-forms
  // for error handling; this is a little janky
  const registerError = props.authError
    ? getRegisterErrorMsg(props.authError)
    : null;

  return (
    <React.Fragment>
      <Header as="h2">Please Register</Header>
      <RegisterForm onSubmit={register} registerError={registerError} />
    </React.Fragment>
  );
};

AuthRegister.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func,
  }).isRequired,
  authError: PropTypes.shape({
    code: PropTypes.string,
  }),
};

const ms2p = ({ firebase: { authError } }) => ({ authError });

export default connect(
  ms2p,
  () => ({}),
)(withFirebase(AuthRegister));
