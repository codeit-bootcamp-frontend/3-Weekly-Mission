import { useState } from 'react';
import { Modal } from '../../Modal/index';
import { ModalSubmitButton } from '../../Modal/ModalSubmitButton/index';
import { KakaoShareButton } from '../../ShareButton/KakaoShareButton';
import { FacebookShareButton } from '../../ShareButton/FacebookShareButton';
import { LinkShareButton } from '../../ShareButton/LinkShareButton';
import styles from './styles.module.css';

export const FolderManagementButton = ({
  selectedFolder,
  iconSource,
  text,
}) => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  let modalContent;

  if (text === '삭제') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        subTitle={selectedFolder.name}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <div className={styles.modal}>
          <ModalSubmitButton type="delete">삭제하기</ModalSubmitButton>
        </div>
      </Modal>
    );
  }

  if (text === '공유') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        subTitle={selectedFolder.name}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <div className={styles.modal}>
          <div className={styles['modal__share-button']}>
            <KakaoShareButton />
            <FacebookShareButton />
            <LinkShareButton />
          </div>
        </div>
      </Modal>
    );
  }

  if (text === '이름 변경') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <div className={styles.modal}>
          <input
            className={styles['modal__input']}
            placeholder="내용 입력"
          ></input>
          <ModalSubmitButton type="submit">변경하기</ModalSubmitButton>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <button className={styles.button} onClick={handleOnClick}>
        <img
          className={styles['button__icon']}
          src={iconSource}
          alt={`${text} 아이콘`}
        />
        <span className={styles['button__text']}>{text}</span>
      </button>
      {visible && modalContent}
    </>
  );
};
