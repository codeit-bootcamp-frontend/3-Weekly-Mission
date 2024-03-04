import { FolderCategoryDataWithIdTotal } from '@pages/folder/comp/article/comp/card-container/comp/folder-link-category/hooks/useGetFolderCategoryList';

import { createWithEqualityFn } from './custom/traditional';
import { shallow } from './custom/vanilla/shallow';

type TFolderSlice = {
  folderCategoryList: FolderCategoryDataWithIdTotal[];
  userId: number | null;
  targetLink: number | null;
  currentFolderId: number | null;
  setUserId: (userId: number) => void;
  setFolderCategoryList: (categories: FolderCategoryDataWithIdTotal[]) => void;
  setTargetLink: (targetLink: number) => void;
  setCurrentFolderId: (folderId: number) => void;
};

export const useFolderStore = createWithEqualityFn<TFolderSlice>()(
  (set) => ({
    userId: null,
    currentFolderId: null,
    folderCategoryList: [],
    targetLink: null,
    setUserId: (userId) => set({ userId }),
    setFolderCategoryList: (categories) => set({ folderCategoryList: categories }),
    setCurrentFolderId: (folderId: number) => set({ currentFolderId: folderId }),
    setTargetLink: (targetLink: number) => set({ targetLink }),
  }),
  shallow,
);
