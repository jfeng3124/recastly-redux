import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYoutube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import changeVideo from '../actions/currentVideo.js';

var store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;