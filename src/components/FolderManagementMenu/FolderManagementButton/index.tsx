import { useState } from 'react';
import { Modal } from '@/components/Modal/index';
import { ModalSubmitButton } from '@/components/Modal/ModalSubmitButton/index';
import { KakaoShareButton } from '@/components/ShareButton/KakaoShareButton';
import { FacebookShareButton } from '@/components/ShareButton/FacebookShareButton';
import { LinkShareButton } from '@/components/ShareButton/LinkShareButton';
import styles from './styles.module.css';
import Image from 'next/image';
import { SelectedFolder } from '@/types/Common';

interface Props {
  selectedFolder: SelectedFolder;
  iconSource: string;
  text: string;
}

export const FolderManagementButton = ({
  selectedFolder,
  iconSource,
  text,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const handleFolderManagementButtonClick = () => {
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  const modalContent = (() => {
    let content;

    switch (text) {
      case '삭제':
        content = (
          <div className={styles.modal}>
            <ModalSubmitButton type="delete">삭제하기</ModalSubmitButton>
          </div>
        );
        break;
      case '공유':
        content = (
          <div className={styles.modal}>
            <div className={styles['modal__share-button']}>
              <KakaoShareButton />
              <FacebookShareButton />
              <LinkShareButton />
            </div>
          </div>
        );
        break;
      case '이름 변경':
        content = (
          <div className={styles.modal}>
            <input
              className={styles['modal__input']}
              placeholder="새 폴더 이름 입력"
            />
            <ModalSubmitButton type="submit">변경하기</ModalSubmitButton>
          </div>
        );
        break;
      default:
        content = null;
    }

    return content ? (
      <Modal
        title={`폴더 ${text}`}
        subTitle={text !== '이름 변경' ? selectedFolder.name : undefined}
        handleModalClose={handleModalClose}
      >
        {content}
      </Modal>
    ) : null;
  })();

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={handleFolderManagementButtonClick}
      >
        <Image width={18} height={18} src={iconSource} alt={`${text} 아이콘`} />
        <span className={styles['button__text']}>{text}</span>
      </button>
      {visible && modalContent}
    </>
  );
};
