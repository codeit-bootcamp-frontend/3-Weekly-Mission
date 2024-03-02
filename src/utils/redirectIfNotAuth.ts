import { GetServerSidePropsContext } from 'next';
import { extractAccessToken } from './extractAccessToken';

export const redirectIfNotAuth = (
  context: GetServerSidePropsContext,
  url: string,
): {
  redirect: {
    destination: string;
    permanent: boolean;
  };
} | null => {
  const accessToken = extractAccessToken(context);

  if (!accessToken) {
    return {
      redirect: {
        destination: url,
        permanent: false,
      },
    };
  }

  return null;
};
