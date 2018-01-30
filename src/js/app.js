import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../data/store';

import BaseLayout from './base-layout';

const App = () => {
    return (
        <Provider store={store}>
            <BaseLayout />
        </Provider>
    );
}

const wrapper = document.getElementById("app-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;