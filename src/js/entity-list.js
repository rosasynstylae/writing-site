import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'semantic-ui-react';
import Button from './ui/button';

/* EntityList:
 * A component that lists entites
 */
const EntityList = (props) => {
    const listItems = [];
    const { EntityListItem, entities, onAdd, onEdit } = props;
    
    for (const key in entities) {
        listItems.push(
            <EntityListItem
                key={key}
                id={key}
                onEdit={onEdit}
                {...entities[key]}
            />
        );
    }
    
    return (
        <div>
            <Button onClick={onAdd.bind(this, null)}>Add</Button>
            <List relaxed divided>
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