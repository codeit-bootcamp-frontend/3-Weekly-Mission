import { useState, useEffect } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import { getFolder } from '@/pages/api/api';
import styles from './styles.module.css';

export const KebabButton = ({ link }) => {
  const [folders, setFolders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
    setDropDownItem(e.target.textContent);
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

  let modalContent;

  if (dropDownItem === '삭제하기') {
    modalContent = (
      <Modal
        title="링크 삭제"
        subTitle={link.url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <button className={styles.modal}>
          <ModalSubmitButton type="delete">삭제하기</ModalSubmitButton>
        </button>
      </Modal>
    );
  }

  if (dropDownItem === '폴더에 추가') {
    modalContent = (
      <Modal
        title="폴더에 추가"
        subTitle={link.url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <button className={styles.modal}>
          <div className={styles['folder-list']}>
            {folders.map(folderItem => (
              <button
                className={styles['folder-list__button']}
                key={folderItem.id}
                onClick={handleModalFolderListClick}
              >
                <div className={styles['folder-item']}>
                  <p className={styles['folder-item-name']}>
                    {folderItem.name}
                  </p>
                  <p className={styles['folder-item-count']}>
                    {folderItem.link.count}개 링크
                  </p>
                </div>
                <img src="./images/check.png" alt="체크" />
              </button>
            ))}
          </div>
          <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
        </button>
      </Modal>
    );
  }

  useEffect(() => {
    const folderData = async () => {
      const data = await getFolder();
      setFolders(data?.data);
    };

    folderData();
  }, []);

  return (
    <>
      <div className={styles['kebab-button']}>
        <button className={styles.delete} onClick={handleClick}>
          삭제하기
        </button>
        <button className={styles.add} onClick={handleClick}>
          폴더에 추가
        </button>
      </div>
      {visible && modalContent}
    </>
  );
};
