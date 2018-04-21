import { combineReducers } from 'redux';

import jobs from './jobs.reducer';
import profile from './profile.reducer';
import registration from './registration.reducer';

const rootReducer = combineReducers({
  jobs,
  profile,
  registration
});

export default rootReducer;