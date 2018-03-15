import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import cloneDeep from 'lodash/cloneDeep';

const UnconnectedFirestoreFilterHOC = (connections) => (Component) => (props) => {
    const { user, ...componentProps } = props;
    const filteredConnections = [];
    
    for (const connection of connections) {
        let filteredConnection = cloneDeep(connection);
        const whereUserFilter = ['user', '==', user];
        
        if (filteredConnection.where) {
            filteredConnection.where.push(whereUserFilter)
        }
        else {
            filteredConnection.where = whereUserFilter;
        }
        
        filteredConnections.push(filteredConnection);
    }
    
    const FirestoreComponent = firestoreConnect(filteredConnections)(Component);
    
    return <FirestoreComponent {...componentProps} />;
};

const ms2p = (state) => ({
    user: state.firebase.auth.uid,
});

const FirestoreFilterHOC = (connections) => (Component) => (props) => {
    const FirestoreComponent = UnconnectedFirestoreFilterHOC(connections)(Component);
    const ConnectedFirestoreComponent = connect(ms2p, () => ({}))(FirestoreComponent);
    
    return <ConnectedFirestoreComponent {...props} />;
}

export default FirestoreFilterHOC;