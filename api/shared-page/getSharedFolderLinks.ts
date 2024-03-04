import { fetchWithGet } from '@api/instance/fetchWithGet';

export interface SharedFolderLink {
  id: number;
  created_at: string;
  updated_at: null | string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  folder_id: number;
}

export interface SharedFolderLinks {
  data: SharedFolderLink[];
}

type getUserFolderLinksParams = {
  userId: number;
  folderId?: string;
};

const GET_SHARED_FOLDER_LINKS_API = '/api/users';

/**
 * 유저가 가지고 있는 링크 읽기
 */
export const getSharedFolderLinks = async ({ userId, folderId }: getUserFolderLinksParams) => {
  return fetchWithGet<SharedFolderLinks>(
    `${GET_SHARED_FOLDER_LINKS_API}/${userId}/links`,
    folderId ? { folderId } : undefined,
  );
};
