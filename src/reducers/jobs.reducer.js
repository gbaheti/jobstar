import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  location: 'India',
  data: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_JOBS_SUCCESS:
      return {
        count: action.jobs.total_count,
        location: action.jobs.searched_location,
        data: action.jobs.results
      }
    default:
      return state;
  }
}