import axios from 'axios';

const baseUrl = 'http://localhost:3000';

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  /* eslint no-param-reassign: 0 */
  config.url = baseUrl + config.url;
  console.log('config', config);
  return config;
}

  , error =>
  // Do something with request error
  Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(response =>
  // Do something with response data
  response
  , error =>
  // Do something with response error
  Promise.reject(error),
);

export default axios;
