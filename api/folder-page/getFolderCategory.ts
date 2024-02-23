import { fetchWithGet } from '@api/instance/fetchWithGet';

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

export interface IFolderCategoryResponse {
  data: TFolderCategoryData[];
}

const getFolderCategory = async (userId: string) => {
  return fetchWithGet<IFolderCategoryResponse>(`/api/users/${userId}/folders`);
};

export { getFolderCategory };
