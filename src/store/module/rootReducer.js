import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import bag from './bag/reducer';

export default combineReducers({ auth, user, bag });
