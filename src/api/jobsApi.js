import TOKEN from './token';

const BASE_URI = 'https://jobstar-mercury.herokuapp.com/api/stars';

const promisifiedXHR = (endPoint, type, params = null, headers) => {
  return new Promise((resolve, reject) => {
    const url = BASE_URI + endPoint;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    }

    xhr.open(type, url);
    
    for(let header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }
    
    if(params) {
      xhr.send(JSON.stringify(params));
    } else {
      xhr.send();
    }
  });
}

const jobsApi = {
  getAllJobs: () => {
    const jobsUri = '/search/jobs/?latitude=28.442232&longitude=77.0359379&start_date=01/04/2018&end_date=30/04/2018&&location_name=Delhi';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.getDefault()
    };

    return promisifiedXHR(jobsUri, 'GET', null, headers);
  },
  generateOtp: (phoneNumber) => {
    const otpUri = '/users/generate_login_otp';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.getDefault()
    };

    return promisifiedXHR(otpUri, 'POST', {phone: phoneNumber}, headers);
  },
  login: (phoneNumber, otp) => {
    const loginUri = '/users/login';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.getDefault()
    };

    return promisifiedXHR(loginUri, 'POST', {phone: phoneNumber, otp: otp, name: 'spars'}, headers)
  },
  saveProfile: (profile) => {
    const profileUri = '/users';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.get()
    };

    return promisifiedXHR(profileUri, 'PATCH', profile, headers);
  },
  getAppliedJobs: () => {
    const appliedJobsUri = '/jobs/all_applied';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.get()
    };

    return promisifiedXHR(appliedJobsUri, 'GET', null, headers);
  },
  apply: (jobIds) => {
    const applyUri = '/jobs/apply';
    const headers = {
      'Content-Type': 'application/json',
      'access_token': TOKEN.get()
    };

    return promisifiedXHR(applyUri, 'POST', {job_ids: jobIds}, headers);
  }
};

export default jobsApi;