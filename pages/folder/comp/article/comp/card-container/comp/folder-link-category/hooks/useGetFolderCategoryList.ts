import { useCallback, useEffect, useState } from 'react';

import { getFolderCategory, TFolderCategoryData } from '@api/folder-page/getFolderCategory';

export interface FolderCategoryDataWithIdTotal extends Partial<Omit<TFolderCategoryData, 'id' | 'name'>> {
  id: number | 'total';
  name: string;
}
const useGetFolderCategoryList = () => {
  const [folderCategoryList, setFolderCategoryList] = useState<FolderCategoryDataWithIdTotal[]>([]);

  const fetchAndSetFolderCategory = useCallback(async () => {
    try {
      const res = await getFolderCategory();

      const {
        data: { folder },
      } = res;

      const flexibleData: FolderCategoryDataWithIdTotal[] = [];

      if (folder.length) {
        flexibleData.unshift({ name: '전체', id: 'total' });
      }

      setFolderCategoryList([...flexibleData, ...folder]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAndSetFolderCategory();
  }, [fetchAndSetFolderCategory]);

  return folderCategoryList;
};

export { useGetFolderCategoryList };
