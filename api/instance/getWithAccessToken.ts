import { AxiosRequestConfig } from 'axios';

import { getObjectTypeError } from '@api/util/getObjectTypeError';

import { axiosToken } from './axiosToken';

const getWithAccessToken = async <T>(endPoint: string, qs?: AxiosRequestConfig['params']): Promise<T> => {
  try {
    const response = await axiosToken.get<T>(endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: qs,
    });

    return response.data;
  } catch (error) {
    console.error('🚀 ~ getWithAccessToken ~ error:', error);

    throw getObjectTypeError(error);
  }
};

export { getWithAccessToken };
