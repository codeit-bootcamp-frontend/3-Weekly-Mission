import { Folder, SelectedFolder } from '@/types/Common';
import { AddFolderButton } from '../AddFolderButton';
import styles from './styles.module.css';

interface Props {
  folder: Folder[];
  selectedFolder: SelectedFolder;
  handleFolderMenuClick: (
    folderId: string | number,
    folderName: string,
  ) => void;
}

export const FolderMenu = ({
  folder,
  selectedFolder,
  handleFolderMenuClick,
}: Props) => {
  return (
    <div className={styles['folder-menu']}>
      <div className={styles['folder-categories']}>
        <button
          className={`${styles['folder-menu__button']} ${selectedFolder.id === 'all' ? styles.selected : null}`}
          onClick={() => handleFolderMenuClick('all', '전체')}
        >
          전체
        </button>
        {folder?.map(folderItem => (
          <button
            className={`${styles['folder-menu__button']} ${selectedFolder.id === folderItem.id ? styles.selected : null}`}
            key={folderItem.id}
            onClick={() =>
              handleFolderMenuClick(folderItem.id, folderItem.name)
            }
          >
            {folderItem.name}
          </button>
        ))}
      </div>
      <AddFolderButton />
    </div>
  );
};
