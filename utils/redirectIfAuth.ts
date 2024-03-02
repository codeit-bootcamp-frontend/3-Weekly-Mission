import { NextRouter } from 'next/router';

export const redirectIfAuth = (redirectURL: string, router: NextRouter) => {
  if (localStorage.accessToken) {
    router.push(redirectURL);
  }
};
