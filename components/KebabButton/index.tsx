import { useState, useEffect, MouseEvent } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import { getFolders } from '@/api/api';
import styles from './styles.module.css';
import Image from 'next/image';
import { Folder, FolderLink } from '@/types/Common';

export const KebabButton = ({ folderLink }: { folderLink: FolderLink }) => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [visible, setVisible] = useState(false);
  const [dropDownItem, setDropDownItem] = useState<string | null>(null);

  const handleKebabItemClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropDownItem(e.currentTarget.textContent);
    setVisible(true);
  };

  const handleModalClose = (e: MouseEvent<HTMLElement>) => {
    setVisible(false);
  };

  let modalContent;

  if (dropDownItem === '삭제하기') {
    modalContent = (
      <Modal
        title="링크 삭제"
        subTitle={folderLink.url}
        handleModalClose={handleModalClose}
      >
        <div className={styles.modal}>
          <ModalSubmitButton type="delete">삭제하기</ModalSubmitButton>
        </div>
      </Modal>
    );
  }

  if (dropDownItem === '폴더에 추가') {
    modalContent = (
      <Modal
        title="폴더에 추가"
        subTitle={folderLink.url}
        handleModalClose={handleModalClose}
      >
        <div className={styles.modal}>
          <div className={styles['folder-list']}>
            {folders.map(folder => (
              <button
                className={styles['folder-list__button']}
                key={folder.id}
                type="button"
              >
                <div className={styles['folder-item']}>
                  <p className={styles['folder-item-name']}>{folder.name}</p>
                  <p className={styles['folder-item-count']}>
                    {folder.link.count}개 링크
                  </p>
                </div>
                <Image
                  width={14}
                  height={14}
                  src="/images/check.png"
                  alt="체크"
                />
              </button>
            ))}
          </div>
          <ModalSubmitButton type="submit">추가하기</ModalSubmitButton>
        </div>
      </Modal>
    );
  }

  useEffect(() => {
    const getFolderData = async () => {
      const folderData = await getFolders();
      setFolders(folderData);
    };

    getFolderData();
  }, []);

  return (
    <>
      <div className={styles['kebab-button']}>
        <button
          className={styles.delete}
          type="button"
          onClick={handleKebabItemClick}
        >
          삭제하기
        </button>
        <button
          className={styles.add}
          type="button"
          onClick={handleKebabItemClick}
        >
          폴더에 추가
        </button>
      </div>
      {visible && modalContent}
    </>
  );
};
