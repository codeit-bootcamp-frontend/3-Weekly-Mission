import { AddFolderButton } from '../AddFolderButton';
import styles from './styles.module.css';

export const FolderMenu = ({ folder, selectedFolder, handleClick }) => {
  return (
    <div className={styles['folder-menu']}>
      <div className={styles['folder-categories']}>
        <button
          className={`${styles['folder-menu__button']} ${selectedFolder.id === 'all' ? styles.selected : null}`}
          onClick={() => handleClick('all', '전체')}
          selectedFolder={selectedFolder.id === 'all'}
        >
          전체
        </button>
        {folder.map(folderItem => (
          <button
            className={`${styles['folder-menu__button']} ${selectedFolder.id === folderItem.id ? styles.selected : null}`}
            key={folderItem.id}
            onClick={() => handleClick(folderItem.id, folderItem.name)}
            selectedFolder={selectedFolder.id === folderItem.id}
          >
            {folderItem.name}
          </button>
        ))}
      </div>
      <AddFolderButton />
    </div>
  );
};
