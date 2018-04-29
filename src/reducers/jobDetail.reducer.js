import * as types from "../actions/actionTypes";

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_JOB_DETAIL_SUCCESS:
      return {
        data: action.job,
      };

    default:
      return state;
  }
};
