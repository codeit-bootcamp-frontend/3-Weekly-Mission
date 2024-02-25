import { fetchWithPost } from '@api/instance/fetachWithPost';

interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

// ? 이것도 env로 감춰야 할까요?
const SIGNIN_API = '/api/sign-in';

export const signin = async ({ email, password }: SigninParams) => {
  return fetchWithPost<SigninParams, SigninResponse>(SIGNIN_API, { email, password });
};
