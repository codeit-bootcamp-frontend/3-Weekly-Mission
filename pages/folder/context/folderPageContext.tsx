import { createContext, PropsWithChildren, useContext } from 'react';

import { FolderCategoryDataWithIdTotal } from '../index.page';

const folderPageServerSidePropContext = createContext<FolderCategoryDataWithIdTotal[]>([]);

// type FolderPageSSGProps
type FolderPageSSRProps = {
  folderCategoryList: FolderCategoryDataWithIdTotal[];
};
type FolderPageServerSidePropContextProviderProps = PropsWithChildren<FolderPageSSRProps>;

export default function FolderPageServerSidePropContextProvider({
  children,
  folderCategoryList,
}: FolderPageServerSidePropContextProviderProps) {
  return (
    <folderPageServerSidePropContext.Provider value={folderCategoryList}>
      {children}
    </folderPageServerSidePropContext.Provider>
  );
}

export const useFolderPageServerSideProp = () => useContext(folderPageServerSidePropContext);
