import { ACCESS_TOKEN } from '@/constant/token';

export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (accessToken) {
    return JSON.parse(accessToken);
  }

  return null;
};
