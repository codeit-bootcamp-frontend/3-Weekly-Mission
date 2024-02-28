import { useState, useEffect } from 'react';
import { getFoldersByAccessToken } from '@/pages/api/api';
import FolderListButton from '../FolderListButton/FolderListButton';
import BaseModal from '../BaseModal/BaseModal';
import modalStyles from '../BaseModal/BaseModal.module.css';
import styles from './FolderList.module.css';
import { Folder, FolderInfo } from '@/pages/folder';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);
const modalCn = classNames.bind(modalStyles);

interface Props {
  onClickFolder: (folder: FolderInfo) => void;
  userId: number;
  folderName: string;
}

export default function FolderList({
  onClickFolder,
  userId,
  folderName,
}: Props) {
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
      const { data } = await getFoldersByAccessToken(
        localStorage.getItem('accessToken')
      );
      if (!data) return;
      setFolders(data.folder);
    }
    getFolders();
  }, [userId]);

  return (
    <>
      <div className={cn('folder-list')}>
        <div className={cn('buttons')}>
          <FolderListButton
            folderName={folderName}
            onClickFolder={onClickFolder}
            buttonName="전체"
          />
          {folders.map((element: Folder) => {
            return (
              <FolderListButton
                key={element.id}
                folderId={element.id}
                onClickFolder={onClickFolder}
                folderName={folderName}
                buttonName={element.name}
              />
            );
          })}
        </div>
        <div className={cn('add-list')}>
          <input className={cn('add-list-input')} />
          <div className={cn('add-list-button')} onClick={onClickAddFolder} />
        </div>
      </div>
      {openModal && (
        <BaseModal closeModal={closeModal}>
          <span className={modalCn('modal__name')}>폴더 추가</span>
          <div className={modalCn('modal__folder-add')}>
            <input
              className={modalCn('modal__input')}
              placeholder="내용 입력"
            />
            <button className={`${modalCn('modal__button')} cta`}>
              추가하기
            </button>
          </div>
        </BaseModal>
      )}
    </>
  );
}
