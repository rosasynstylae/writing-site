import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import get from 'lodash/get';

import Link from './ui/span-link';
import Header from './ui/header';

import { listEntities } from '../data/ui-actions';

/* EntityEdit:
 * A component that allows for the easy editting set up for entites
 */
const EntityEdit = props => {
  const {
    id,
    onClearPage,
    EditForm,
    user,
    headerField,
    entity,
    ...formProps
  } = props;
  const header =
    entity && entity[headerField] ? (
      <Header as='h3'>{entity[headerField]}</Header>
    ) : null;
  const initialValues = id && entity ? { id, ...entity } : { user };

  return (
    <div>
      <Link onClick={onClearPage}>Return to List >></Link>
      {header}
      <EditForm
        form={`entityEditForm${id}`}
        initialValues={initialValues}
        {...formProps}
      />
    </div>
  );
};

EntityEdit.propTypes = {
  entity: PropTypes.object,
  onSubmit: PropTypes.func,
  onClearPage: PropTypes.func,
};

EntityEdit.defaultProps = {
  entity: null,
};

const ms2p = (state, ownProps) => {
  const entity = ownProps.id
    ? get(state.firestore.data, `${ownProps.entityType}.${ownProps.id}`, null)
    : null;
  const universes = ownProps.useUniverses
    ? state.firestore.data.universes
    : null;

  return {
    entity,
    universes,
    user: state.firebase.auth.uid,
  };
};

const md2p = (dispatch, ownProps) => {
  // allow for the overwriting of onSubmit this way
  const defaultOnSubmit = values => {
    const { id, ...vals } = values;
    // we use the straight collection/doc set up here because .set() MUST
    // have an id associated with it; .doc() autogenerates an id, which is
    // what we want. This set up will now work for both edit AND add
    const universeRef = ownProps.firebase
      .firestore()
      .collection(ownProps.entityType);
    const universeDocRef = id ? universeRef.doc(id) : universeRef.doc();
    universeDocRef.set(vals).then(() => {
      if (!ownProps.noRedirectAfterSubmit) {
        dispatch(listEntities());
      }
    });
  };
  const onSubmit = ownProps.onSubmit || defaultOnSubmit;

  return {
    onSubmit,
    onClearPage: () => {
      dispatch(listEntities());
    },
  };
};

export default withFirestore(
  connect(
    ms2p,
    md2p,
  )(EntityEdit),
);
