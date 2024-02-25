import {
  Folder,
  FolderLink,
  FolderSample,
  SignUser,
  User,
} from '@/types/Common';
import { ERROR_MESSAGES, API } from '@/constants/constants';

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
    folderId === 'all'
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
  const formattedData: FolderLink[] = result.folder.links.map(
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
export const postUserSignin: (user: SignUser) => Promise<any> = async user => {
  const result = await fetchSignData(API.SIGN_IN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return result;
};

// 회원가입

// data fetch 로직 분리
const fetchData = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch 에러: ${error}`);
    throw error;
  }
};

const fetchSignData = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (response.status === 400) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch 에러: ${error}`);
    throw error;
  }
};
