import { getWithAccessToken } from '@api/instance/getWithAccessToken';

export type TFolderCategoryData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  // link: {
  //   count: number;
  // };
};

export interface IFolderCategoryResponse {
  data: {
    folder: TFolderCategoryData[];
  };
}

const GET_FOLDERS_DATA_API = '/api/folders';

const getFolderCategory = async () => {
  return getWithAccessToken<IFolderCategoryResponse>(GET_FOLDERS_DATA_API);
};

export { getFolderCategory };
