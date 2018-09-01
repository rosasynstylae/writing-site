import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { List, Popup } from 'semantic-ui-react';
import Header from '../ui/header';
import Button, { RedButton } from '../ui/button';

import { editEntity } from '../../data/ui-actions';

import EntityList from '../entity-list';
import EntityEdit from '../entity-edit';

import UniverseEditForm from '../forms/universe-edit-form';

import FirestoreFilter from '../firestore';

const UniverseListItem = props => (
  <List.Item key={props.id}>
    <List.Content floated="right">
      <Button onClick={props.onEdit.bind(this, props.id)} content="Edit" />
      <Popup
        trigger={<Button content="Delete" />}
        content={
          <RedButton
            onClick={props.onDelete.bind(this, props.id)}
            content="Are you sure?"
          />
        }
        on="click"
        position="top right"
      />
    </List.Content>
    <List.Icon name="world" size="big" verticalAlign="middle" />
    <List.Content>
      <Header as="h4">{props.name}</Header>
      <List.Description as="p">{props.description}</List.Description>
    </List.Content>
  </List.Item>
);

UniverseListItem.propTypes = {
  onEdit: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

UniverseListItem.defaultProps = {
  onEdit: () => {},
};

/* Universe:
 * A component that handles the universes page
 */
const UniversesPage = props => {
  const { page, entities, onEdit, onSubmit, firestore } = props;

  const onDelete = id => {
    firestore.delete(`universes/${id}`);
  };

  // if we are editing/adding, show edit universe content, else we're listing
  const display = page.isEdit ? (
    <EntityEdit
      entityType="universes"
      headerField="name"
      id={page.currentEntity}
      EditForm={UniverseEditForm}
      onSubmit={onSubmit}
    />
  ) : (
    <EntityList
      EntityListItem={UniverseListItem}
      entities={entities}
      onEdit={onEdit}
      onAdd={onEdit}
      onDelete={onDelete}
    />
  );

  return display;
};

UniversesPage.propTypes = {
  entities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      user: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  page: PropTypes.shape({
    isEdit: PropTypes.bool,
    currentEntity: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func,
  onSubmit: PropTypes.func,
};

UniversesPage.defaultProps = {
  entities: [],
};

const ms2p = state => ({
  entities: state.firestore.ordered.universes,
  page: state.ui.pageContent,
});

const md2p = (dispatch, ownProps) => ({
  onEdit: id => {
    dispatch(editEntity(id));
  },
});

export default FirestoreFilter([{ collection: 'universes' }], true)(
  connect(
    ms2p,
    md2p,
  )(UniversesPage),
);
