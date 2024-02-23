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

  const modalContent = (() => {
    let content;

    switch (dropDownItem) {
      case '삭제하기':
        content = (
          <div className={styles.modal}>
            <ModalSubmitButton type="delete">삭제하기</ModalSubmitButton>
          </div>
        );
        break;
      case '폴더에 추가':
        content = (
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
        );
        break;
      default:
        content = null;
    }

    return (
      <Modal
        title={dropDownItem === '삭제하기' ? '링크 삭제' : '폴더에 추가'}
        subTitle={folderLink.url}
        handleModalClose={handleModalClose}
      >
        {content}
      </Modal>
    );
  })();

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
