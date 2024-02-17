import { useState } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import styles from './styles.module.css';

export const AddFolderButton = () => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <button className={styles['add-folder__button']} onClick={handleOnClick}>
        <span className={styles['add-folder__button--text']}>폴더 추가</span>
        <img
          className={styles['add-folder__button--icon']}
          src="/images/add.svg"
        />
      </button>
      {visible && (
        <Modal
          title="폴더 추가"
          stateVisible={visible}
          handleCloseModal={handleCloseModal}
        >
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
