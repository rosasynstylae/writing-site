import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const logger = createLogger();

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    ),
);

export default store;