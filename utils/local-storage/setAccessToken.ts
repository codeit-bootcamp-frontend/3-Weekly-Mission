import { ACCESS_TOKEN } from '@/constant/web-storage/localStorage';

export const setAccessToken = <T>(accessToken: T) => {
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
  }
};
