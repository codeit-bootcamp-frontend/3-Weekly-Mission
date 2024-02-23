import { Api, FolderManagementButton, Times } from '@/types/Common';

export const TIMES: Times = {
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
};

const BASE_URL: string = 'https://bootcamp-api.codeit.kr';

export const API: Api = {
  ROOT: `${BASE_URL}`,
  USER_SAMPLE: `${BASE_URL}/api/sample/user`,
  FOLDER_SAMPLE: `${BASE_URL}/api/sample/folder`,
  USER: `${BASE_URL}/api/users/4`,
  FOLDER: `${BASE_URL}/api/users/4/folders`,
  FOLDER_LINK: `${BASE_URL}/api/users/4/links`,
};

export const FOLDER_MANAGEMENT_BUTTONS: FolderManagementButton[] = [
  {
    iconSource: '/images/share.svg',
    text: '공유',
  },
  {
    iconSource: '/images/pen.svg',
    text: '이름 변경',
  },
  {
    iconSource: '/images/delete.svg',
    text: '삭제',
  },
];
