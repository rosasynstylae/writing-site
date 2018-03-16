import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { List } from 'semantic-ui-react';
import Header from '../ui/header';
import Button from '../ui/button';

import { editEntity, listEntities } from '../../data/ui-actions';

import EntityList from '../entity-list';
import EntityEdit from '../entity-edit';

import UniverseEditForm from '../forms/universe-edit-form';

import FirestoreFilter from '../firestore';

const UniverseListItem = (props) => (
    <List.Item key={props.id}>
        <List.Content floated='right'>
            <Button onClick={props.onEdit.bind(this, props.id)}>Edit</Button>
        </List.Content>
        <List.Icon name='world' size='big' verticalAlign='middle' />
        <List.Content>
            <Header as='h4'>{props.name}</Header>
            <List.Description as='p'>{props.description}</List.Description>
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
const UniversesPage = (props) => {
    const { page, entities, onEdit, onSubmit } = props;
    // if we are editing/adding, show edit universe content, else we're listing
    const display = page.isEdit 
        ? (<EntityEdit
                entityType='universes'
                headerField='name'
                id={page.currentEntity}
                EditForm={UniverseEditForm}
                onSubmit={onSubmit}
            />)
        : (<EntityList
                EntityListItem={UniverseListItem}
                entities={entities}
                onEdit={onEdit}
                onAdd={onEdit}
            />);
    
    return display;
};

UniversesPage.propTypes = {
    entities: PropTypes.object,
    page: PropTypes.shape({
        isEdit: PropTypes.bool,
        currentEntity: PropTypes.string,
    }).isRequired,
    onEdit: PropTypes.func,
    onSubmit: PropTypes.func,
};

UniversesPage.defaultProps = {
    entities: {},
};

const ms2p = (state) => ({
    entities: state.firestore.data.universes,
    page: state.ui.pageContent,
});

const md2p = (dispatch, ownProps) => ({
    onEdit: (id) => {
        dispatch(editEntity(id));
    },
});

export default FirestoreFilter([ { collection: 'universes' } ])(
    connect(ms2p, md2p)(UniversesPage)
);
