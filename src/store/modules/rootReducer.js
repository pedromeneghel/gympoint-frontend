import { combineReducers } from 'redux';

import auth from './auth/reducer';
import plans from './plans/reducer';

export default combineReducers({
  auth,
  plans,
});
