import * as types from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  currentState: null,
  isLogin: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.OPEN_REGISTRATION_MODAL:
      return Object.assign({}, state, {
        isOpen: true,
        currentState: 'register'
      });
      
    case types.SEND_OTP_SUCCESS: 
      return Object.assign({}, state, {
        currentState: 'confirmation',
        isLogin: action.isLogin
      });
    
    case types.CONFIRM_OTP_SUCCESS:
      return Object.assign({}, state, {
        currentState: 'profileDetails'
      });

    case types.SAVE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        currentState: 'success'
      });

    case types.CLOSE_REGISTRATION_MODAL:
      return initialState;
    
    default:
      return state;
  }
}