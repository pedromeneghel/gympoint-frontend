import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import plans from './plans/sagas';
import students from './students/sagas';

export default function* rootSaga() {
  return yield all([auth, plans, students]);
}
