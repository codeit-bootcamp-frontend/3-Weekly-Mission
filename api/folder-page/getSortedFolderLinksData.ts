import { getWithAccessToken } from '@api/instance/getWithAccessToken';

export type TFolderLink = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
};

interface ISortedFolderLinksDataResponse {
  data: {
    folder: TFolderLink[];
  };
}

/**
 * 유저가 가지고 있는 링크 읽기(선택한 폴더 링크들 가져옴)
 */
const GET_FOLDER_LINKS_DATA_API = '/api/links';

const getSortedFolderLinksData = async (folderId: '' | number) => {
  return getWithAccessToken<ISortedFolderLinksDataResponse>(
    GET_FOLDER_LINKS_DATA_API,
    folderId ? { folderId } : undefined,
  );
};

export { getSortedFolderLinksData };
