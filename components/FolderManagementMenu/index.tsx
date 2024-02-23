import { folderManagementButtons } from './folderManagementButtons';
import { FolderManagementButton } from './FolderManagementButton';
import styles from './styles.module.css';
import { SelectedFolder } from '@/types/Common';

export const FolderManagementMenu = ({
  selectedFolder,
}: {
  selectedFolder: SelectedFolder;
}) => {
  return (
    <div className={styles['selected-folder']}>
      <div className={styles['selected-folder__menu']}>
        {selectedFolder.name}
      </div>
      {selectedFolder.id !== 'all' && (
        <div className={styles['folder-management-buttons']}>
          {folderManagementButtons.map(button => {
            return (
              <FolderManagementButton
                selectedFolder={selectedFolder}
                key={button.text}
                {...button}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
