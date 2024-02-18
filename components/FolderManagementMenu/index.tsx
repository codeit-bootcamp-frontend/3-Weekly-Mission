import { FOLDER_MANAGEMENT_BUTTONS } from '@/utils/constants';
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
        <button className={styles['folder-management-button']}>
          {FOLDER_MANAGEMENT_BUTTONS.map(buttonData => {
            return (
              <FolderManagementButton
                selectedFolder={selectedFolder}
                key={buttonData.text}
                {...buttonData}
              />
            );
          })}
        </button>
      )}
    </div>
  );
};
