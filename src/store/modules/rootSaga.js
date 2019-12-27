import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import plans from './plans/sagas';

export default function* rootSaga() {
  return yield all([auth, plans]);
}
