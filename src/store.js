import {applyMiddleware, createStore} from 'redux';
import Logger from 'redux-logger';
import {inspiryReducer} from './reducers';

const initialState = window.INITIAL_STATE;
const middleware = applyMiddleware(Logger);

export default createStore(inspiryReducer, initialState, middleware);
