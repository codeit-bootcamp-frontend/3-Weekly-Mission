import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { getFolder } from '@/api/api';
import styles from './styles.module.css';
import { Folder } from '@/types/Common';
import { AddLinkModal } from '../Modal/AddLinkModal';

export const AddLinkInput = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddLinkButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setVisible(!visible);
  };

  const handleModalClose = (e: MouseEvent<HTMLElement>) => {
    setVisible(false);
  };

  useEffect(() => {
    const getFolderData = async () => {
      const folderData = await getFolder();
      setFolders(folderData);
    };

    getFolderData();
  }, []);

  return (
    <>
      <form className={styles['add-link__form']}>
        <div className={styles['input-container']}>
          <img
            className={styles['add-link__icon']}
            width="20"
            src="/images/link.svg"
            alt="링크 아이콘"
          />
          <input
            className={styles['add-link__input']}
            placeholder="링크를 추가해 보세요"
            name="addLinkData"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button
            className={styles['add-link__button']}
            type="button"
            onClick={handleAddLinkButtonClick}
          >
            추가하기
          </button>
        </div>
      </form>
      {visible && (
        <AddLinkModal
          folders={folders}
          inputValue={inputValue}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};
