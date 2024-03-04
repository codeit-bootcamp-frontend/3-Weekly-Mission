import { getStringTypeError } from '@api/util/getStringTypeError';

import { axiosInstance } from './axiosInstance';

const fetchWithPost = async <T, R>(
  endPoint: string,
  body?: T,
  qs?: ConstructorParameters<typeof URLSearchParams>[number],
): Promise<R> => {
  try {
    const response = await axiosInstance.post<R>(endPoint, body, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: qs,
    });

    return response.data;
  } catch (error) {
    console.error('🚀 ~ fetchWithPost ~ error:', error);

    throw new Error(getStringTypeError(error));
  }
};

export { fetchWithPost };
