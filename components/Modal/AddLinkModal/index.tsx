import Image from 'next/image.js';
import { Modal } from '../index';
import { ModalSubmitButton } from '../ModalSubmitButton/index';
import styles from './styles.module.css';
import { Folder } from '@/types/Common.js';
import { MouseEvent } from 'react';

interface Props {
  folders: Folder[];
  inputValue: string | undefined;
  handleCloseModal: (e: MouseEvent<HTMLElement>) => void;
}

export const AddLinkModal = ({
  folders,
  inputValue,

  handleCloseModal,
}: Props) => {
  return (
    <Modal
      title="폴더에 추가"
      subTitle={inputValue}
      handleCloseModal={handleCloseModal}
    >
      <div className={styles.modal}>
        <div className={styles['folder-list']}>
          {folders.map(folderItem => (
            <button
              className={styles['folder-list__button']}
              type="button"
              key={folderItem.id}
            >
              <div className={styles['folder-item']}>
                <p className={styles['folder-item-name']}>{folderItem.name}</p>
                <p className={styles['folder-item-count']}>
                  {folderItem.link.count}개 링크
                </p>
              </div>
              <Image
                width={14}
                height={14}
                src="/images/check.png"
                alt="체크 아이콘"
              />
            </button>
          ))}
        </div>
        <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
      </div>
    </Modal>
  );
};
