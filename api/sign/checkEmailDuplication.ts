import { fetchWithPost } from '@api/instance/fetachWithPost';

interface CheckEmailDuplicationResponse {
  data: {
    isUsableNickname: boolean;
  };
}

// {
//   "data": {
//     "isUsableNickname": true
//   }
// }

// {
//   "error": {
//     "message": "올바른 이메일이 아닙니다."
//   }
// }

// {
//   "error": {
//     "message": "이미 존재하는 이메일입니다."
//   }
// }

const EMAIL_DUPLICATION_CHECK_API = '/api/check-email';

export const checkEmailDuplication = async (email: string) => {
  return fetchWithPost<{ email: string }, CheckEmailDuplicationResponse>(EMAIL_DUPLICATION_CHECK_API, { email });
};
