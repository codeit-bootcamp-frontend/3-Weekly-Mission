import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://bootcamp-api.codeit.kr/api/',
});
