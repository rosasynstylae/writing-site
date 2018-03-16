import React from 'react';
import PropTypes from 'prop-types';

import { List, Message } from 'semantic-ui-react';
import Button from './ui/button';

/* EntityList:
 * A component that lists entites
 */
const EntityList = (props) => {
    const { EntityListItem, entities, onAdd, onEdit, onDelete } = props;
    const listItems = [];
    const emptyMessage = !entities
        ? <Message content='No Items to Show' />
        : null;
    // FIXME - pull out any deleted entities. this feels dirty.
    const correctEntities = [];
    for (const key in entities) {
        if (entities[key]) {
            correctEntities.push(key);
        }
    }
    
    for (const key of correctEntities) {
        listItems.push(
            <EntityListItem
                key={key}
                id={key}
                onEdit={onEdit}
                onDelete={onDelete}
                {...entities[key]}
            />
        );
    }
    
    return (
        <div>
            <Button onClick={onAdd.bind(this, null)}>Add</Button>
            <List relaxed divided>
                {emptyMessage}
                {listItems}
            </List>
        </div>
    );
};

EntityList.propTypes = {
    entities: PropTypes.object,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
};

EntityList.defaultProps = {
    entities: {},
}

export default EntityList;
