import { useState, useEffect } from 'react';
import { getFoldersById } from '@/pages/api/api';
import FolderListButton from '../FolderListButton/FolderListButton';
import BaseModal from '../BaseModal/BaseModal';
import modalStyles from '../BaseModal/BaseModal.module.css';
import styles from './FolderList.module.css';
import { Folder, FolderInfo } from '@/pages/folder';

interface Props {
  onClickFolder: (folder: FolderInfo) => void;
  id: number;
  folderName: string;
}

export default function FolderList({ onClickFolder, id, folderName }: Props) {
  const [folders, setFolders] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onClickAddFolder = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    async function getFolders() {
      const { data } = await getFoldersById(id);
      if (!data) return;
      setFolders(data);
    }

    getFolders();
  }, [id]);

  return (
    <>
      <div className={styles['folder-list']}>
        <div className={styles['buttons']}>
          <FolderListButton
            folderName={folderName}
            onClickFolder={onClickFolder}
            buttonName="전체"
          />
          {folders.map((element: Folder) => {
            return (
              <FolderListButton
                key={element.id}
                id={element.id}
                onClickFolder={onClickFolder}
                folderName={folderName}
                buttonName={element.name}
              />
            );
          })}
        </div>
        <div className={styles['add-list']}>
          <input className={styles['add-list-input']} />
          <div
            className={styles['add-list-button']}
            onClick={onClickAddFolder}
          />
        </div>
      </div>
      {openModal && (
        <BaseModal closeModal={closeModal}>
          <span className={modalStyles['modal__name']}>폴더 추가</span>
          <div className={modalStyles['modal__folder-add']}>
            <input
              className={modalStyles['modal__input']}
              placeholder="내용 입력"
            />
            <button className={`${modalStyles['modal__button']} cta`}>
              추가하기
            </button>
          </div>
        </BaseModal>
      )}
    </>
  );
}
