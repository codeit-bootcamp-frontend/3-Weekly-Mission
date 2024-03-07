import { fetchWithGet } from '@api/instance/fetchWithGet';

export interface SharedUserFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface SharedUserFolderResponse {
  data: SharedUserFolder[];
}

const GET_SHARED_FOLDER_API = '/api/folders';

export const getSharedUserFolder = async (folderId: string) => {
  return fetchWithGet<SharedUserFolderResponse>(`${GET_SHARED_FOLDER_API}/${folderId}`);
};
