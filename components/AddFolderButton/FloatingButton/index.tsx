import { useState } from 'react';
import { Modal } from '../../Modal/index';
import { ModalSubmitButton } from '../../Modal/ModalSubmitButton/index';
import Image from 'next/image';
import styles from './styles.module.css';

export const AddFolderFloatingButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleAddFolderButtonClick: () => void = () => {
    setVisible(true);
  };

  const handleCloseModal: () => void = () => {
    setVisible(false);
  };

  return (
    <>
      <button
        className={styles['add-folder__button']}
        onClick={handleAddFolderButtonClick}
      >
        <span className={styles['add-folder__button--text']}>폴더 추가</span>
        <Image
          width={18}
          height={18}
          src="/images/add-white.svg"
          alt="읜색 + 아이콘"
        />
      </button>
      {visible && (
        <Modal title="폴더 추가" handleCloseModal={handleCloseModal}>
          <div className={styles.modal}>
            <input
              className={styles['modal__input']}
              placeholder="내용 입력"
            ></input>
            <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
          </div>
        </Modal>
      )}
    </>
  );
};
