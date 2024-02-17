import { useState, useEffect } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import { getFolder } from '@/pages/api/api';
import styles from './styles.module.css';

export const AddLinkInput = () => {
  const [folders, setFolders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.value);
  };

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(!visible);
  };

  const handleCloseModal = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
  };

  const handleModalFolderListClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  let modalContent = (
    <Modal
      title="폴더에 추가"
      subTitle={inputValue}
      stateVisible={visible}
      handleCloseModal={handleCloseModal}
    >
      <div className={styles.modal}>
        <div className={styles['folder-list']}>
          {folders.map(folderItem => (
            <button
              className={styles['folder-list__button']}
              key={folderItem.id}
              onClick={handleModalFolderListClick}
            >
              <div className={styles['folder-item']}>
                <p className={styles['folder-item-name']}>{folderItem.name}</p>
                <p className={styles['folder-item-count']}>
                  {folderItem.link.count}개 링크
                </p>
              </div>
              <img src="./images/check.png" alt="체크" />
            </button>
          ))}
        </div>
        <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
      </div>
    </Modal>
  );

  useEffect(() => {
    const folderData = async () => {
      const data = await getFolder();
      setFolders(data?.data);
    };

    folderData();
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
          <button className={styles['add-link__button']} onClick={handleClick}>
            추가하기
          </button>
        </div>
      </form>
      {visible && modalContent}
    </>
  );
};
