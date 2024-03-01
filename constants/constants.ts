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

export const ALL_CONTENTS_FOLDER = {
  NAME: '전체',
  ID: 'all',
} as const;
