import { combineReducers } from "redux";

import ui from "./ui.reducer";
import jobs from "./jobs.reducer";
import user from "./user.reducer";
import jobDetail from "./jobDetail.reducer";
import registration from "./registration.reducer";

const rootReducer = combineReducers({
  ui,
  jobs,
  user,
  jobDetail,
  registration,
});

export default rootReducer;
