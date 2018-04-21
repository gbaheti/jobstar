const BASE_URI = 'https://jobstar-mercury.herokuapp.com/api';
const TOKEN = 'Y29uc3VtZXJfYW5kcm9pZF9rZXk6Y29uc3VtZXJfYW5kcm9pZF9zZWNyZXQ6UUg5WGZ1cWp0LV9TcTJCTzNJRXVUUTpzdW1pdEBzcGFycy5pbg==';

const promisifiedGET = (endPoint) => {
  return new Promise((resolve, reject) => {
    const url = BASE_URI + endPoint;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(xhr.responseText));
        resolve(JSON.parse(xhr.responseText));
      }
    }

    xhr.open('GET', url);
    
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('access_token', TOKEN);
    
    xhr.send();
  });
}

const jobsApi = {
  getAllJobs: () => {
    const jobsUri = '/stars/search/jobs/?latitude=28.442232&longitude=77.0359379&start_date=01/04/2018&end_date=30/04/2018&&location_name=Delhi';

    return promisifiedGET(jobsUri);
  }
};

export default jobsApi;