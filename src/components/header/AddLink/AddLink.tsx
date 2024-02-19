import { ChangeEvent, useState } from 'react';
import styles from './AddLink.module.css';
import BaseModal from '../../section/BaseModal/BaseModal';
import modalStyles from '../../section/BaseModal/BaseModal.module.css';
import Image from 'next/image';
import { FolderList } from '@/pages/folder';

interface Props {
  folderList: FolderList[];
  className?: string;
}

export default function AddLink({ folderList, className = '' }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [folderItem, setFolderItem] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setFolderItem(null);
    setOpenModal(false);
  };

  return (
    <div className={`${styles['container-add-link']} ${styles[className]}`}>
      <div className={styles['add-link']}>
        <div className={styles['add-link-input']}>
          <Image
            width={20}
            height={20}
            className={styles['link-icon']}
            src="/images/link.svg"
            alt="클립 아이콘"
          />
          <input
            className={styles['link-input']}
            placeholder="링크를 추가해 보세요"
            onChange={handleInputValueChange}
          />
        </div>
        <button className={styles['cta-add']} onClick={handleOpenModal}>
          추가하기
        </button>
        {openModal && (
          <BaseModal closeModal={closeModal}>
            <div className={modalStyles['modal__link-add']}>
              <span className={modalStyles['modal__name']}>폴더에 추가</span>
              <span className={modalStyles['modal__link']}>{inputValue}</span>
            </div>
            <div className={modalStyles['modal__folder-list']}>
              {folderList.map((folder) => {
                const className =
                  folder.name === folderItem
                    ? `${modalStyles['modal__folder--item']} ${modalStyles['active']}`
                    : modalStyles['modal__folder--item'];
                const onClickFolderItem = () => {
                  setFolderItem(folder.name);
                };

                return (
                  <div
                    key={folder.name}
                    className={className}
                    onClick={onClickFolderItem}
                  >
                    <span className={modalStyles['modal__item-name']}>
                      {folder.name}
                    </span>
                    <span className={modalStyles['modal__link-count']}>
                      {folder.linkCount}개 링크
                    </span>
                    {folderItem === folder.name && (
                      <Image
                        width={14}
                        height={14}
                        className={modalStyles['modal__check-icon']}
                        src="/images/check.png"
                        alt="체크 아이콘"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className={`${modalStyles['modal__button']} cta`}>
              추가하기
            </button>
          </BaseModal>
        )}
      </div>
    </div>
  );
}