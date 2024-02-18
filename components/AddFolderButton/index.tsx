import { useState } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import styles from './styles.module.css';
import Image from 'next/image';

export const AddFolderButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOnClick: () => void = () => {
    setVisible(true);
  };

  const handleCloseModal: () => void = () => {
    setVisible(false);
  };

  return (
    <>
      <button className={styles['add-folder__button']} onClick={handleOnClick}>
        <span className={styles['add-folder__button--text']}>폴더 추가</span>
        <Image width={18} height={18} src="/images/add.svg" alt="+ 아이콘" />
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
