import * as types from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  profile: null,
  appliedJobs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CONFIRM_OTP_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        profile: action.profile,
      });

    case types.SAVE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.profile,
      });

    case types.FETCH_APPLIED_JOBS_SUCCESS:
      return Object.assign({}, state, {
        appliedJobs: action.jobs.previous,
      });

    case types.RESTORE_SESSION:
      return Object.assign({}, state, {
        isLoggedIn: true,
        profile: action.profile,
      });

    default:
      return state;
  }
};
