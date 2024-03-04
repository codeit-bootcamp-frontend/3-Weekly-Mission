import { fetchWithGet } from '@api/instance/fetchWithGet';

// {
//   "data": [
//     {
//       "id": 816,
//       "created_at": "2024-03-04T11:58:24.491328+00:00",
//       "name": "테스트 폴더",
//       "user_id": 2363,
//       "favorite": false
//     }
//   ]
// }

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
