import * as types from './actionTypes.js';
import jobsApi from '../api/jobsApi';
import TOKEN from '../api/token';

export const restoreSession = () => {
  return (dispatch) => {
    let profile = localStorage.getItem('jobstar_user_profile');

    if(profile) {
      profile = JSON.parse(profile);
      
      dispatch(fetchAppliedJobs());
      dispatch({
        type: types.RESTORE_SESSION,
        profile
      });
    }
  }
}

export const fetchJobs = () => {
  return (dispatch) => {
    return jobsApi.getAllJobs()
      .then(res => {
        dispatch(fetchJobsSuccess(res));
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
};

export const fetchAppliedJobs = () => {
  return (dispatch) => {
    return jobsApi.getAppliedJobs()
      .then(res => {
        console.log(res)

        const jobs = Object.keys(res).length > 0 ? res : [];
         
        dispatch(fetchAppliedJobsSuccess(jobs));
      })
      .catch(err => {
        throw(err);
      });
  };
}

export const fetchAppliedJobsSuccess = (jobs) => {
  return {
    type: types.FETCH_APPLIED_JOBS_SUCCESS,
    jobs
  };
};

export const openRegistrationModal = () => {
  return {
    type: types.OPEN_REGISTRATION_MODAL
  };
};

export const sendOtp = (phoneNumber) => {
  return (dispatch) => {
    return jobsApi.generateOtp(phoneNumber)
      .then(res => {
        console.log(res);
        
        dispatch(sendOtpSuccess(res.is_user_exist));
      })
      .catch(err => {
        throw(err);
      });
  };
};

export const sendOtpSuccess = (isLoginFlow) => {
  return {
    type: types.SEND_OTP_SUCCESS,
    isLoginFlow
  };
};

export const confirmOtp = (phoneNumber, otp) => {
  return (dispatch) => {
    return jobsApi.login(phoneNumber, otp)
    .then(res => {
      console.log(res);
      
      TOKEN.update(res.access_token);
      localStorage.setItem('jobstar_user_profile', JSON.stringify(res.user));

      dispatch(confirmOtpSuccess(res.user));
      dispatch(fetchAppliedJobs());
    })
    .catch(err => {
      throw(err);
    });
  };
};

export const confirmOtpSuccess = (profile) => {
  return {
    type: types.CONFIRM_OTP_SUCCESS,
    profile
  };
};

export const saveProfile = (profile) => {
  return (dispatch) => {
    return jobsApi.saveProfile(profile)
    .then(res => {
      console.log(res);
      
      localStorage.setItem('jobstar_user_profile', JSON.stringify(res));

      dispatch(saveProfileSuccess(res));
    })
    .catch(err => {
      throw(err);
    });
  };
};

export const saveProfileSuccess = (profile) => {
  return {
    type: types.SAVE_PROFILE_SUCCESS,
    profile
  };
};

export const closeRegistrationModal = () => {
  return {
    type: types.CLOSE_REGISTRATION_MODAL
  }
}

export const applyForJob = (ids) => {
  return (dispatch) => {
    return jobsApi.apply(ids)
    .then(res => {
      console.log(res);

      dispatch(applyForJobSuccess(res));
      dispatch(fetchAppliedJobs());
    })
    .catch(err => {
      throw(err);
    });
  };
};

export const applyForJobSuccess = (res) => {
  return {
    type: types.APPLY_JOB_SUCCESS
  };
};