import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import visitors from './visitors';
import trainingReducer from './trainingReducer';
import sd029Reducer from './sd029Reducer';

export default combineReducers({ alert, auth, profile, post, visitors, trainingReducer, sd029Reducer });