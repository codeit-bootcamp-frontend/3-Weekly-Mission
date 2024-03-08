import { setCookie } from '@utils/cookie';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constant/token';

type Tokens = {
  accessToken?: string;
  refreshToken?: string;
};

export const setToken = ({ accessToken, refreshToken }: Tokens) => {
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
  }

  if (refreshToken) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    setCookie(REFRESH_TOKEN, refreshToken, { expires, httpOnly: true, sameSite: 'Lax', secure: true });
  }
};
