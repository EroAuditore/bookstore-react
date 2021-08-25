import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  bookStore: booksReducer,
  // additional reducers could be added here
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);
/* eslint-enable */

export default store;
