import { GetServerSidePropsContext } from 'next';

export const extractAccessToken = (
  context: GetServerSidePropsContext,
): string | undefined => {
  const cookies = context.req.headers.cookie;
  return cookies
    ?.split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];
};
