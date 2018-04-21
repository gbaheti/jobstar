import * as types from './actionTypes.js';
import jobsApi from '../api/jobsApi';

export const fetchJobs = () => {
  return (dispatch) => {
    return jobsApi.getAllJobs()
      .then(jobs => {
        dispatch(fetchJobsSuccess(jobs));
      })
      .catch(err => {
        throw(err);
      });
  };
};

export const fetchJobsSuccess = (data) => {
  return {
    type: types.FETCH_JOBS_SUCCESS,
    jobs: data
  };  
}

export const openRegistrationModal = () => {
  return {
    type: types.OPEN_REGISTRATION_MODAL
  };
};

export const sendOtp = (phoneNumber) => {
  return (dispatch) => {
    console.log('Sending OTP to : ', phoneNumber);

    return dispatch(sendOtpSuccess());
  }
};

export const sendOtpSuccess = () => {
  return {
    type: types.SEND_OTP_SUCCESS
  }
}

export const confirmOtp = (otp) => {
  return (dispatch) => {
    console.log('Recieved OTP : ', otp);

    dispatch(confirmOtpSuccess());
  }
}

export const confirmOtpSuccess = () => {
  return {
    type: types.CONFIRM_OTP_SUCCESS
  }
}

// TODO - add api to save profile

export const saveProfile = () => {
  return {
    type: types.SAVE_PROFILE_SUCCESS
  }
}

export const closeRegistrationModal = () => {
  return {
    type: types.CLOSE_REGISTRATION_MODAL
  }
}