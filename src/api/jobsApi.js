import TOKEN from "./token";

const BASE_URI = "https://jobstar-mercury.herokuapp.com/api";

const promisifiedXHR = (endPoint, type, params = null, headers) => {
  return new Promise((resolve, reject) => {
    const url = BASE_URI + endPoint;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };

    xhr.open(type, url);

    for (let header in headers) {
      xhr.setRequestHeader(header, headers[header]);
    }

    if (params) {
      xhr.send(JSON.stringify(params));
    } else {
      xhr.send();
    }
  });
};

const jobsApi = {
  getAllJobs: isLoggedIn => {
    const jobsUri =
      "/stars/search/jobs/?latitude=28.442232&longitude=77.0359379&start_date=01/03/2018&end_date=30/05/2018&&location_name=Delhi";
    const headers = {
      "Content-Type": "application/json",
      access_token: isLoggedIn ? TOKEN.get() : TOKEN.getDefault(),
    };

    return promisifiedXHR(jobsUri, "GET", null, headers);
  },
  getJob: id => {
    const jobUri = "/stars/jobs/" + id;
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };

    return promisifiedXHR(jobUri, "GET", null, headers);
  },
  generateOtp: phoneNumber => {
    const otpUri = "/stars/users/generate_login_otp";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };

    return promisifiedXHR(otpUri, "POST", { phone: phoneNumber }, headers);
  },
  login: (phoneNumber, otp) => {
    const loginUri = "/stars/users/login";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };

    return promisifiedXHR(loginUri, "POST", { phone: phoneNumber, otp: otp }, headers);
  },
  facebookLogin: (details) => {
    const loginUri = "/stars/users/login";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };
    const data = {
      name: details.name,
      email: details.email,
      gender: details.gender,
      fb_id: details.id,
      fb_token: details.accessToken
    };

    return promisifiedXHR(loginUri, "POST", data, headers);
  },
  saveProfile: profile => {
    const profileUri = "/stars/users";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.get(),
    };

    return promisifiedXHR(profileUri, "PATCH", profile, headers);
  },
  getAppliedJobs: () => {
    const appliedJobsUri = "/stars/jobs/all_applied";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.get(),
    };

    return promisifiedXHR(appliedJobsUri, "GET", null, headers);
  },
  apply: jobIds => {
    const applyUri = "/stars/jobs/apply";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.get(),
    };

    return promisifiedXHR(applyUri, "POST", { job_ids: jobIds }, headers);
  },
  sendAlerts: phoneNumber => {
    const whatsappUri = "/leads";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };

    return promisifiedXHR(whatsappUri, "POST", { phone: phoneNumber }, headers);
  },
  sendBusinessDetails: details => {
    const businessUri = "/leads";
    const headers = {
      "Content-Type": "application/json",
      access_token: TOKEN.getDefault(),
    };
    const data = {
      phone: details.phone,
      misc: {
        name: details.name,
        email: details.email,
        company: details.company,
      },
    };

    return promisifiedXHR(businessUri, "POST", data, headers);
  },
};

export default jobsApi;
