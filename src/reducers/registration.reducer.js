import * as types from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  currentState: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_REGISTRATION_MODAL:
      return Object.assign({}, state, {
        isOpen: true,
        currentState: "register",
      });


    case types.CONFIRM_LOGIN_SUCCESS:
      const { profile } = action;
      const shouldShowDetailsPage = !(profile.phone || profile.dob || profile.city);

      return Object.assign({}, state, {
        currentState: shouldShowDetailsPage ? "profileDetails" : "success",
      });

    case types.SAVE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        currentState: "success",
      });

    case types.CLOSE_REGISTRATION_MODAL:
      return initialState;

    default:
      return state;
  }
};
