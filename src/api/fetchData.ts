import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '@/constants/url';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

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
