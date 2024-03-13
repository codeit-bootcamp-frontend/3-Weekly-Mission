import axios from 'axios';
import { axiosInstance } from './axiosInterceptors';

// data fetch 로직 분리
export const fetchData = async (
  url: string,
  method = 'get',
  data = {},
  config = {},
) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      throw error;
    }
    if (error instanceof Error) {
      console.error(`에러 발생: ${error.message}`);
      throw Error;
    }
    console.error(`알 수 없는 에러: ${error}`);
    throw error;
  }
};
