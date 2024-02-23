import { useState, useEffect, MouseEvent } from 'react';
import { Modal } from '../Modal/index';
import { ModalSubmitButton } from '../Modal/ModalSubmitButton/index';
import { getFolder } from '@/api/api';
import styles from './styles.module.css';
import Image from 'next/image';
import { Folder, FolderItem } from '@/types/Common';

export const KebabButton = ({ link }: { link: FolderItem }) => {
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
        subTitle={link.url}
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
        subTitle={link.url}
        handleModalClose={handleModalClose}
      >
        <div className={styles.modal}>
          <div className={styles['folder-list']}>
            {folders.map(folderItem => (
              <button
                className={styles['folder-list__button']}
                key={folderItem.id}
                type="button"
              >
                <div className={styles['folder-item']}>
                  <p className={styles['folder-item-name']}>
                    {folderItem.name}
                  </p>
                  <p className={styles['folder-item-count']}>
                    {folderItem.link.count}개 링크
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
      const folderData = await getFolder();
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
