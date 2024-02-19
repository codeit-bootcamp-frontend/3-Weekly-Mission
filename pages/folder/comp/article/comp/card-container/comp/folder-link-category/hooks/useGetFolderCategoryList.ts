import { useCallback, useEffect, useState } from 'react';

import { getFolderCategory } from '@api/folder-page/getFolderCategory';

type TFolderCategoryDataWithIdTotal = {
  id: number | 'total';
  created_at?: string;
  name: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
};

const useGetFolderCategoryList = () => {
  const [folderCategoryList, setFolderCategoryList] = useState<TFolderCategoryDataWithIdTotal[]>([]);

  const fetchAndSetFolderCategory = useCallback(async () => {
    const res = await getFolderCategory();

    if (res) {
      const { data } = res;
      const flexibleData: TFolderCategoryDataWithIdTotal[] = [];

      if (data.length) flexibleData.unshift({ name: '전체', id: 'total' });

      setFolderCategoryList([...flexibleData, ...data]);
    }
  }, []);

  useEffect(() => {
    fetchAndSetFolderCategory();
  }, [fetchAndSetFolderCategory]);

  return folderCategoryList;
};

export { useGetFolderCategoryList };
