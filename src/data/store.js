import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { initFirebase } from './firebase';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';

const logger = createLogger();

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(initFirebase, rrfConfig),
  reduxFirestore(initFirebase)
)(createStore);


const initialState = {};
const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(getFirebase), logger)
    ),
);

export default store;