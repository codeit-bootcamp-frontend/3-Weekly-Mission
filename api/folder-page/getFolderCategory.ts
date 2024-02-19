import { fetchWithGet } from '@api/instance/fetchWithGet';

const GET_FOLDER_CATEGORY_API = '/api/users/1/folders';

export type TFolderCategoryData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
};
interface IFolderCategoryResponse {
  data: TFolderCategoryData[];
}

const getFolderCategory = async () => {
  return fetchWithGet<IFolderCategoryResponse>(GET_FOLDER_CATEGORY_API);
};

export { getFolderCategory };
