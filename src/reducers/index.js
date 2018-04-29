import { combineReducers } from "redux";

import jobs from "./jobs.reducer";
import user from "./user.reducer";
import jobDetail from "./jobDetail.reducer";
import registration from "./registration.reducer";

const rootReducer = combineReducers({
  jobs,
  user,
  jobDetail,
  registration,
});

export default rootReducer;
