import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { List } from 'semantic-ui-react';
import Header from '../ui/header';
import Button from '../ui/button';

import FirestoreFilter from '../firestore';

/* Universe:
 * A component that handles the universes page
 */
const Universes = (props) => {
    const listItems = [];
    
    for (const key in props.universes) {
        const universe = props.universes[key];
        listItems.push(
            <List.Item key={key}>
                <List.Content floated='right'>
                    <Button>Add</Button>
                </List.Content>
                <List.Icon name='world' size='big' verticalAlign='middle' />
                <List.Content>
                    <Header as='h4'>{universe.name}</Header>
                    <List.Description as='p'>{universe.description}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
    
    return (
        <List relaxed divided>
            {listItems}
        </List>
    );
};

Universes.propTypes = {
    universes: PropTypes.object,
};

Universes.defaultProps = {
    universes: {},
}

const ms2p = (state) => ({
    universes: state.firestore.data.universes,
});

export default connect(ms2p, () => ({}))(FirestoreFilter([ { collection: 'universes' } ])(Universes));