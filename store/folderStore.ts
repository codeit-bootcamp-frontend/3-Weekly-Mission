import { createWithEqualityFn } from './custom/traditional';
import { shallow } from './custom/vanilla/shallow';

// folderCategories: null,
//     userId: null,
//     targetLink: null,
//     currentFolderId: null,

// folderName: '코딩팁', linkCount: 7

type TFolderCategory = {
  folderName: string;
  linkCount: number;
};

type TFolderSlice = {
  folderCategories: TFolderCategory[];
  userId: number | null;
  targetLink: number | null;
  currentFolderId: number | null;
  setUserId: (userId: number) => void;
  setFolderCategories: (categories: TFolderCategory[]) => void;
  setTargetLink: (targetLink: number) => void;
  setCurrentFolderId: (folderId: number) => void;
};

export const useFolderStore = createWithEqualityFn<TFolderSlice>()(
  (set) => ({
    userId: null,
    currentFolderId: null,
    folderCategories: [],
    targetLink: null,
    setUserId: (userId) => set({ userId }),
    setFolderCategories: (categories) => set({ folderCategories: categories }),
    setCurrentFolderId: (folderId: number) => set({ currentFolderId: folderId }),
    setTargetLink: (targetLink: number) => set({ targetLink }),
  }),
  shallow,
);
