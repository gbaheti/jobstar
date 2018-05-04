import * as types from "../actions/actionTypes";

const initialState = {
  isSidebarOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
};
