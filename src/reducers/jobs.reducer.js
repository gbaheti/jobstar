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
        data: action.jobs.results.map(j => Object.assign({}, j, { applied: false }))
      }
    
    case types.APPLY_JOB_SUCCESS:
      const jobs = state.data.map(j => {
        if(j.ids[0] === action.ids[0]) {
          j.applied = true;
        }

        return j;
      });

      return Object.assign({}, state, {
        data: jobs
      });

    default:
      return state;
  }
}