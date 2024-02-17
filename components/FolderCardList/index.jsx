import { useState, useEffect } from 'react';
import { CardList } from '../CardList/index';
import { FolderMenu } from '../FolderMenu';
import { FolderManagementMenu } from '../FolderManagementMenu';
import { AddFolderFloatingButton } from '../AddFolderButton/FloatingButton/index';
import { getFolder, getFolderItem } from '@/pages/api/api';
import styles from './styles.module.css';

export const FolderCardList = ({
  link,
  setLink,
  selectedFolder,
  setSelectedFolder,
}) => {
  const [folder, setFolder] = useState([]);

  const handleClick = async (folderId, folderName) => {
    setSelectedFolder({ id: folderId, name: folderName });
    try {
      const data = await getFolderItem(folderId);
      setLink(data?.data);
    } catch (error) {
      console.error(`Error: ${error}`);
      setLink([]);
    }
  };

  useEffect(() => {
    const folderData = async () => {
      const data = await getFolder();
      setFolder(data?.data);
    };
    folderData();
  }, []);

  return (
    <div className={styles['folder-card-list']}>
      <FolderMenu
        folder={folder}
        selectedFolder={selectedFolder}
        handleClick={handleClick}
      />
      <FolderManagementMenu selectedFolder={selectedFolder} />
      <CardList link={link} />
      <AddFolderFloatingButton />
    </div>
  );
};
