import { fetchWithPost } from '@api/instance/fetachWithPost';

interface CheckEmailDuplicationResponse {
  data: {
    isUsableNickname: boolean;
  };
}

const EMAIL_DUPLICATION_CHECK_API = '/api/check-email';

export const checkEmailDuplication = async (email: string) => {
  return fetchWithPost<{ email: string }, CheckEmailDuplicationResponse>(EMAIL_DUPLICATION_CHECK_API, { email });
};
