import { folderManagementButtons } from './folderManagementButtons';
import { FolderManagementButton } from './FolderManagementButton';
import styles from './styles.module.css';
import { SelectedFolder } from '@/types/Common';
import { ALL_CONTENTS_FOLDER } from '@/constants/constants';

interface Props {
  selectedFolder: SelectedFolder;
}

export const FolderManagementMenu = ({ selectedFolder }: Props) => {
  return (
    <div className={styles['selected-folder']}>
      <div className={styles['selected-folder__menu']}>
        {selectedFolder.name}
      </div>
      {selectedFolder.id !== ALL_CONTENTS_FOLDER.ID && (
        <div className={styles['folder-management-buttons']}>
          {folderManagementButtons.map((button) => {
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
