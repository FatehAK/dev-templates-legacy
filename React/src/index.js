//polyfills
import 'core-js';
import 'raf/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import { unregisterSW } from './utils';
import './index.scss';

export const history = createBrowserHistory();

const rootElement = document.getElementById('root');

render(
    <Router history={history}>
        <App />
    </Router>,
    rootElement
);

unregisterSW();
