// Libraries
import axios, {AxiosInstance} from 'axios';

// Resources
import {REQUEST_SERVER_URL} from './serverConstants';

const instance: AxiosInstance = axios.create({baseURL: REQUEST_SERVER_URL});

instance.interceptors.request.use(async function (config) {
  config.timeoutErrorMessage = 'Request Timed Out';
  return config;
});

instance.interceptors.response.use(response => {
  return response;
});

export {instance as http};
