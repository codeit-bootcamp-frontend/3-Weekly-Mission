import { ACCESS_TOKEN } from '@/constant/web-storage/localStorage';

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (accessToken) {
    return JSON.parse(accessToken);
  }

  return null;
};
