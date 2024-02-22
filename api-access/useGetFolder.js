import { axiosInstance } from '@/util/axiosInstance';
import { mapFolderData } from '@/util/mapFolderData';
import { useAsync } from '@/util/useAsync';

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get('sample/folder');
  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
