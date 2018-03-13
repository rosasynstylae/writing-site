import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Auth:
 * A component that holds the login/register content
 */
const Auth = (props) => (
    <div>
        STUFF HERE
    </div>
);

Auth.propTypes = {
    auth: PropTypes.object.isRequired,
};

const ms2p = (state) => ({
    auth: state.firebase.auth,
});

export default connect(ms2p, () => ({}))(Auth);