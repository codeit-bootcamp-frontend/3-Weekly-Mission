export const API_BASE_URL = 'https://bootcamp-api.codeit.kr/api/linkbrary/v1';
const USER_ID = 4;

export const API = {
  ROOT: `${API_BASE_URL}`,
  USER_SAMPLE: `${API_BASE_URL}/sample/users`,
  FOLDER_SAMPLE: `${API_BASE_URL}/sample/folders`,
  USER: `${API_BASE_URL}/users/`,
  FOLDER: `${API_BASE_URL}/users/${USER_ID}/folders`,
  FOLDER_LINK: `${API_BASE_URL}/users/${USER_ID}/links`,
  SIGN_IN: `${API_BASE_URL}/sign-in`,
  SIGN_UP: `${API_BASE_URL}/sign-up`,
  CHECK_EMAIL: `${API_BASE_URL}/check-email`,
} as const;
