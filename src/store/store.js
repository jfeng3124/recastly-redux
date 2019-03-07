import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

//Create your redux store, apply thunk as a middleware, and export it!
var initialState = {
  currentVideo: null,
  videoList: exampleVideoData
};

var store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(thunk)
);

export default store;