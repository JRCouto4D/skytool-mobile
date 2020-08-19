import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
import bag from './bag/sagas';
import sale from './sale/sagas';

export default function* rootSaga() {
  return yield all([auth, user, bag, sale]);
}
