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
    e.preventDefault();
    e.stopPropagation();
    setVisible(!visible);
  };

  const handleModalClose = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
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
          <label htmlFor="input-link" />
          <input
            className={styles['add-link__input']}
            id="input-link"
            placeholder="링크를 추가해 보세요"
            name="addLinkData"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button
            className={styles['add-link__button']}
            type="submit"
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
