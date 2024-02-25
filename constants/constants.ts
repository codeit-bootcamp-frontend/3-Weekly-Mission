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
