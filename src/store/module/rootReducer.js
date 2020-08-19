import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import bag from './bag/reducer';
import sale from './sale/reducer';

export default combineReducers({ auth, user, bag, sale });
