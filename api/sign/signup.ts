import { fetchWithPost } from '@api/instance/fetachWithPost';

interface SignupParams {
  email: string;
  password: string;
}

interface SignupResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

// ? 이것도 env로 감춰야 할까요?
const SIGNUP_API = '/api/sign-up';

export const signup = async ({ email, password }: SignupParams) => {
  return fetchWithPost<SignupParams, SignupResponse>(SIGNUP_API, { email, password });
};
