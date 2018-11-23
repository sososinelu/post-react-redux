import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import { fetchAllPosts } from './actions/index';

// CSS
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Service worker
import * as serviceWorker from './serviceWorker';

// Redux chrome dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );

store.dispatch(fetchAllPosts());
;
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Service worker
serviceWorker.register();
