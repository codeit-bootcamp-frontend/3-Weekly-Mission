import {
  DuplicateEmail,
  Folder,
  FolderLink,
  FolderSample,
  SignAccess,
  SignUser,
  User,
} from '@/types/Common';
import { API } from '@/constants/url';
import axios from 'axios';
import { ALL_CONTENTS_FOLDER } from '@/constants/constants';

export const getUser: () => Promise<User> = async () => {
  const result = await fetchData(API.USER);
  return result?.data[0];
};

export const getFolders: () => Promise<Folder[]> = async () => {
  const result = await fetchData(API.FOLDER);
  return result?.data;
};

export const getFolderLinks: (
  folderId: number | string,
) => Promise<FolderLink[]> = async folderId => {
  const result = await fetchData(
    folderId === ALL_CONTENTS_FOLDER.ID
      ? API.FOLDER_LINK
      : `${API.FOLDER_LINK}?folderId=${folderId}`,
  );
  return result?.data;
};

export const getUserSample: () => Promise<User> = async () => {
  const result = await fetchData(API.USER_SAMPLE);
  return {
    ...result,
    image_source: result.profileImageSource ? result.profileImageSource : null,
  };
};

export const getFolderSample: () => Promise<FolderSample> = async () => {
  const result = await fetchData(API.FOLDER_SAMPLE);
  const formattedData: FolderLink[] = result?.folder?.links.map(
    (folderLink: FolderLink) => ({
      ...folderLink,
      created_at: folderLink.createdAt,
      image_source: folderLink.imageSource,
    }),
  );
  return {
    ...result.folder,
    links: formattedData,
  };
};

// 로그인
export const postUserSignin: (
  user: SignUser,
) => Promise<SignAccess> = async user => {
  const result = await fetchData(API.SIGN_IN, 'post', user);
  return result?.data;
};

// 회원가입
export const postUserSignup: (
  user: SignUser,
) => Promise<SignAccess> = async user => {
  const result = await fetchData(API.SIGN_UP, 'post', user);
  console.log(result);
  return result?.data;
};

// 이메일 중복 확인
export const postDuplicateEmail: (
  userEmail: string,
) => Promise<DuplicateEmail> = async userEmail => {
  const result = await fetchData(API.CHECK_EMAIL, 'post', { email: userEmail });
  return result?.data;
};

// data fetch 로직 분리
const fetchData = async (
  url: string,
  method = 'get',
  data = {},
  config = {},
) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(`Axios 에러: ${error}`);
    throw error;
  }
};
