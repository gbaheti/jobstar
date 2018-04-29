import * as types from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  currentState: null,
  isLoginFlow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_REGISTRATION_MODAL:
      return Object.assign({}, state, {
        isOpen: true,
        currentState: "register",
      });

    case types.SEND_OTP_SUCCESS:
      return Object.assign({}, state, {
        currentState: "confirmation",
        isLoginFlow: action.isLoginFlow,
      });

    case types.CONFIRM_OTP_SUCCESS:
      if (state.isLoginFlow) {
        return Object.assign({}, state, {
          isOpen: false,
          currentState: null,
        });
      } else {
        return Object.assign({}, state, {
          currentState: "profileDetails",
        });
      }

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
