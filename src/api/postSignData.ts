import { DuplicateEmail, SignAccess, SignUser } from '@/types/Common';
import { fetchData } from './fetchData';

// 로그인
export const postUserSignin: (user: SignUser) => Promise<SignAccess> = async (
  user,
) => {
  const result = await fetchData('/auth/sign-in', 'post', user);
  console.log(result);
  if (!result.accessToken || !result.refreshToken) {
    throw new Error('No Token');
  }
  return result;
};

// 회원가입
export const postUserSignup: (user: SignUser) => Promise<SignAccess> = async (
  user,
) => {
  const result = await fetchData('/auth/sign-up', 'post', user);
  if (!result.data.accessToken || !result.data.refreshToken) {
    throw new Error('No Token');
  }
  return result?.data;
};

// 이메일 중복 확인
export const postDuplicateEmail: (
  userEmail: string,
) => Promise<DuplicateEmail> = async (userEmail) => {
  const result = await fetchData('/users/check-email', 'post', {
    email: userEmail,
  });
  return result?.data;
};
