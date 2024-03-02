import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CardList } from '../CardList/index';
import { FolderMenu } from '../FolderMenu';
import { FolderManagementMenu } from '../FolderManagementMenu';
import { AddFolderFloatingButton } from '../AddFolderButton/FloatingButton/index';
import { getFolders, getFolderLinks } from '@/api/api';
import styles from './styles.module.css';
import { Folder, FolderLink, SelectedFolder } from '@/types/Common';

interface Props {
  folderLinks: FolderLink[];
  setFolderLinks: Dispatch<SetStateAction<FolderLink[]>>;
  selectedFolder: SelectedFolder;
  setSelectedFolder: Dispatch<SetStateAction<SelectedFolder>>;
}

export const FolderCardList = ({
  folderLinks,
  setFolderLinks,
  selectedFolder,
  setSelectedFolder,
}: Props) => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFolderMenuClick = async (
    folderId: string | number,
    folderName: string,
  ) => {
    if (isLoading) {
      return;
    }

    setSelectedFolder({ id: folderId, name: folderName });
    setIsLoading(true);
    const Links = await getFolderLinks(folderId);
    setFolderLinks(Links);
    setIsLoading(false);
  };

  useEffect(() => {
    const getFolderData = async () => {
      const folderData = await getFolders();
      setFolders(folderData);
    };
    getFolderData();
  }, []);

  return (
    <div className={styles['folder-card-list']}>
      <FolderMenu
        folders={folders}
        selectedFolder={selectedFolder}
        handleFolderMenuClick={handleFolderMenuClick}
      />
      <FolderManagementMenu selectedFolder={selectedFolder} />
      <CardList folderLinks={folderLinks} />
      <AddFolderFloatingButton />
    </div>
  );
};
