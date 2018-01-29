import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from './base-layout';

const App = () => {
    return (
        <BaseLayout />
    );
}

const wrapper = document.getElementById("app-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;