//polyfills
import 'core-js';
import 'raf/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import { unregisterSW } from './utils';
import store from './redux/configStore';
import './index.scss';

export const history = createBrowserHistory();

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    rootElement
);

unregisterSW();
