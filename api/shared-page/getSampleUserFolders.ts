import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_SAMPLE_USER_FOLDERS_API = '/api/sample/folder';

export type TSampleFolderLink = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
};

export type TSampleFolderUserInfo = {
  id: number;
  /**
   * 폴더명
   */
  name: string;
  owner: {
    id: number;
    /**
     * 폴더 주인 이름
     */
    name: string;
    profileImageSource: string;
  };
  count: number;
};

export interface ISampleUserFoldersResponse {
  folder: TSampleFolderUserInfo & {
    links: TSampleFolderLink[];
  };
}

const getSampleUserFolders = async () => {
  return fetchWithGet<ISampleUserFoldersResponse>(GET_SAMPLE_USER_FOLDERS_API);
};

export { getSampleUserFolders };
