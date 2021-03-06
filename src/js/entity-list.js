import React from 'react';
import PropTypes from 'prop-types';

import { List, Message, Segment } from 'semantic-ui-react';
import Button from './ui/button';

/* EntityList:
 * A component that lists entites
 */
const EntityList = props => {
  const { EntityListItem, entities, onAdd, onEdit, onDelete } = props;
  const listItems = [];
  const emptyMessage = !entities.length ? (
    <Message content="No Items to Show" />
  ) : null;

  // Fixme - should we just use a forEach or map here? This made perfect sense
  // when it was an object, but now that it's an array we have more options
  for (const entity of entities) {
    listItems.push(
      <EntityListItem
        key={entity.id}
        onEdit={onEdit}
        onDelete={onDelete}
        {...entity}
      />,
    );
  }

  return (
    <Segment>
      <Button onClick={onAdd.bind(this, null)}>Add</Button>
      <List relaxed divided>
        {emptyMessage}
        {listItems}
      </List>
    </Segment>
  );
};

EntityList.propTypes = {
  entities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
};

EntityList.defaultProps = {
  entities: [],
};

export default EntityList;
