import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../data/store';

import { injectGlobal } from 'styled-components';

import BaseLayout from './base-layout';

const App = () => (
  <Provider store={store}>
    <BaseLayout />
  </Provider>
);

/* Below are some site-wide stylings
 * FIXME - where should this go? Is this replaceable with theming from
 * styled components?
 * We need the eslint disabling because of the way it understands
 * styled-components
 */
/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Special+Elite');

html {
  font-size: 15px;
}
`;

const wrapper = document.getElementById('app-body');
if (wrapper) ReactDOM.render(<App />, wrapper);
