import axios, { AxiosError, InternalAxiosRequestConfig, isAxiosError } from 'axios';

import { getAccessToken } from '@utils/local-storage/getAccessToken';
import { logOnDev } from '@utils/logger/logOnDev';

export const axiosToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: 'Request timeout, please try again later',
});

axiosToken.interceptors.request.use(
  (config) => {
    const { method, url } = config;
    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

    if (getAccessToken()) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }

    return config;
  },
  (error: AxiosError | Error): Promise<AxiosError> => {
    if (isAxiosError(error)) {
      const { method, url } = error.config as InternalAxiosRequestConfig;
      logOnDev(`☢️ [API] ${method?.toUpperCase()} ${url} | Response`);
    } else {
      logOnDev(`☢️ [API] | Error ${error.message} Response`);
    }

    return Promise.reject(error);
  },
);
