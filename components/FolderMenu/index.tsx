import { Folder, SelectedFolder } from '@/types/Common';
import { AddFolderButton } from '../AddFolderButton';
import styles from './styles.module.css';

interface Props {
  folders: Folder[];
  selectedFolder: SelectedFolder;
  handleFolderMenuClick: (
    folderId: string | number,
    folderName: string,
  ) => void;
}

export const FolderMenu = ({
  folders,
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
        {folders?.map(folder => (
          <button
            className={`${styles['folder-menu__button']} ${selectedFolder.id === folder.id ? styles.selected : null}`}
            key={folder.id}
            onClick={() => handleFolderMenuClick(folder.id, folder.name)}
          >
            {folder.name}
          </button>
        ))}
      </div>
      <AddFolderButton />
    </div>
  );
};
