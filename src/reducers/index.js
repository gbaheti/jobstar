import { combineReducers } from 'redux';

import jobs from './jobs.reducer';
import user from './user.reducer';
import registration from './registration.reducer';

const rootReducer = combineReducers({
  jobs,
  user,
  registration
});

export default rootReducer;