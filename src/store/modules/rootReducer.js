import { combineReducers } from 'redux';

import auth from './auth/reducer';
import enrollments from './enrollments/reducer';
import plans from './plans/reducer';
import students from './students/reducer';

export default combineReducers({
  auth,
  enrollments,
  plans,
  students,
});
