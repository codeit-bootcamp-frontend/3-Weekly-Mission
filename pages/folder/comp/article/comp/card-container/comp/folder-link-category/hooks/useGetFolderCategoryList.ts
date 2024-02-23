// TODO: 페이지 로직 정리되면 파일 지우기
import { useState } from 'react';

import { FolderCategoryDataWithIdTotal } from '@pages/folder/index.page';

import { getFolderCategory } from '@api/folder-page/getFolderCategory';

const useGetFolderCategoryList = (initialFolderCategoryList: FolderCategoryDataWithIdTotal[]) => {
  const [folderCategoryList, setFolderCategoryList] =
    useState<FolderCategoryDataWithIdTotal[]>(initialFolderCategoryList);

  const fetchAndSetFolderCategory = async (userId: string) => {
    const res = await getFolderCategory(userId);

    if (res) {
      const { data } = res;
      const flexibleData: FolderCategoryDataWithIdTotal[] = [];

      if (data.length) {
        flexibleData.unshift({ name: '전체', id: 'total' });
      }

      setFolderCategoryList([...flexibleData, ...data]);
    }
  };

  return { folderCategoryList, fetchAndSetFolderCategory };
};

export { useGetFolderCategoryList };
