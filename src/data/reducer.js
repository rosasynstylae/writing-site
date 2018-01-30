import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import userReducer from './user-reducer';
import uiReducer from './ui-reducer';

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;