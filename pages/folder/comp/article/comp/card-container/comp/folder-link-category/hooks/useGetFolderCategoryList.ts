import { useState } from 'react';

import { FolderCategoryDataWithIdTotal } from '@pages/folder/index.page';

import { getFolderCategory } from '@api/folder-page/getFolderCategory';

/**
 *
 * @todo 이거 state랑 fetch 코드 전부 FolderPageServerSidePropContextProvider로 옮겨도 될 듯.
 */
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
