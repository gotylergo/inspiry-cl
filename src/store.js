import {applyMiddleware, createStore} from 'redux';
import {inspiryReducer} from './reducers';

const initialState = window.INITIAL_STATE;
let middleware = [];

if (process.env.NODE_ENV !== 'production') {
  const Logger = require('redux-logger');
  middleware = [...Logger];
}

export default createStore(inspiryReducer, initialState, applyMiddleware(...middleware));
