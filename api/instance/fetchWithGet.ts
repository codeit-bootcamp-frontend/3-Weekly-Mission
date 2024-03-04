import { AxiosRequestConfig } from 'axios';

import { getObjectTypeError } from '@api/util/getObjectTypeError';

import { axiosInstance } from './axiosInstance';

const fetchWithGet = async <T>(endPoint: string, qs?: AxiosRequestConfig['params']): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: qs,
    });

    return response.data;
  } catch (error) {
    console.error('🚀 ~ fetchWithGet ~ error:', error);

    throw getObjectTypeError(error);
  }
};

export { fetchWithGet };
