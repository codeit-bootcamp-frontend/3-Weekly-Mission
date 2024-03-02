const BASE_URL = 'https://bootcamp-api.codeit.kr';

export const API = {
  ROOT: `${BASE_URL}`,
  USER_SAMPLE: `${BASE_URL}/api/sample/user`,
  FOLDER_SAMPLE: `${BASE_URL}/api/sample/folder`,
  USER: `${BASE_URL}/api/users/4`,
  FOLDER: `${BASE_URL}/api/users/4/folders`,
  FOLDER_LINK: `${BASE_URL}/api/users/4/links`,
  SIGN_IN: `${BASE_URL}/api/sign-in`,
  SIGN_UP: `${BASE_URL}/api/sign-up`,
  CHECK_EMAIL: `${BASE_URL}/api/check-email`,
} as const;
