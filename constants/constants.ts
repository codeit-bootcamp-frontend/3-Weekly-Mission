export const TIMES = {
  ONE_MINUTE_AGO: '1 minute ago',
  MINUTES_AGO: ' minutes ago',
  ONE_HOUR_AGO: '1 hour ago',
  HOURS_AGO: ' hours ago',
  ONE_DAY_AGO: '1 day ago',
  DAYS_AGO: ' days ago',
  ONE_MONTH_AGO: '1 month ago',
  MONTHS_AGO: ' months ago',
  ONE_YEAR_AGO: '1 year ago',
  YEARS_AGO: ' years ago',
} as const;

const BASE_URL = 'https://bootcamp-api.codeit.kr';

export const API = {
  ROOT: `${BASE_URL}`,
  USER_SAMPLE: `${BASE_URL}/api/sample/user`,
  FOLDER_SAMPLE: `${BASE_URL}/api/sample/folder`,
  USER: `${BASE_URL}/api/users/4`,
  FOLDER: `${BASE_URL}/api/users/4/folders`,
  FOLDER_LINK: `${BASE_URL}/api/users/4/links`,
  SIGN_IN: `${BASE_URL}/api/sign-in`,
} as const;

export const MANAGEMENT_ACTIONS = {
  SHARE: '공유',
  EDIT_NAME: '이름 변경',
  DELETE: '삭제',
} as const;

export const SOCIAL_LINKS = {
  FACEBOOK: {
    NAME: '페이스북',
    URL: 'https://www.facebook.com/',
    ICON: '/images/facebook-icon.svg',
  },
  TWITTER: {
    NAME: '트위터',
    URL: 'https://twitter.com/',
    ICON: '/images/twitter-icon.svg',
  },
  YOUTUBE: {
    NAME: '유튜브',
    URL: 'https://www.youtube.com/',
    ICON: '/images/youtube-icon.svg',
  },
  INSTAGRAM: {
    NAME: '인스타그램',
    URL: 'https://www.instagram.com/',
    ICON: '/images/instagram-icon.svg',
  },
} as const;

export const ERROR_MESSAGES = {
  DUPLICATE_EMAIL: '중복된 이메일입니다.',
  EMAIL_REQUIRED: '이메일을 입력해주세요.',
  PASSWORD_REQUIRED: '비밀번호를 입력해주세요.',
  PASSWORD_CONFIRM_REQUIRED: '비밀번호를 다시 한번 입력해주세요',
  EMAIL_CHECK_FAILED: '이메일을 확인해주세요.',
  PASSWORD_CHECK_FAILED: '비밀번호를 확인해주세요.',
  PASSWORD_CONFIRM_CHECK_FAILED: '비밀번호를 다시 한번 확인해주세요.',
  INVALID_EMAIL: '올바른 이메일 주소가 아닙니다.',
  INVALID_PASSWORD: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  INVALID_PASSWORD_CONFIRM: '비밀번호가 일치하지 않아요.',
  SIGN_IN_ERROR: '로그인 에러',
  SIGN_UP_ERROR: '회원가입 에러',
  SIGN_IN_FAILED: '로그인에 실패했습니다. 다시 시도해주세요.',
  SIGN_UP_FAILED: '회원가입에 실패했습니다. 다시 시도해주세요.',
} as const;

export const EMAIL_REGEX =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
