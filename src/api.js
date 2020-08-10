import axios from 'axios';
import {Url, API_REQUEST_TIMEOUT_IN_MS} from '@/const';

const Error = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: Url.BASE,
    timeout: API_REQUEST_TIMEOUT_IN_MS,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
