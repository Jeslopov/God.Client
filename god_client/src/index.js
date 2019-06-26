import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import { applyMiddleware ,combineReducers ,createStore } from "redux";
import * as Reducers from "./rdux/reducers";

const rootReducer = combineReducers({
    match: Reducers.MatchReducer
});

const logger = createLogger({
    // ...options
  });


const Store = createStore(rootReducer,applyMiddleware(logger, thunkMiddleware));

ReactDOM.render(<Provider store={Store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
