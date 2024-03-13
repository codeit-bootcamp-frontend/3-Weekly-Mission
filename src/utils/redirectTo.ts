import { NextRouter } from 'next/router';

export const redirectTo = (
  condition: boolean,
  redirectURL: string,
  router: NextRouter,
) => {
  if (condition) {
    router.push(redirectURL);
  }
};
