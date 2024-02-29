import { ChangeEvent, useState } from 'react';
import styles from './AddLink.module.css';
import BaseModal from '../../section/BaseModal/BaseModal';
import modalStyles from '../../section/BaseModal/BaseModal.module.css';
import Image from 'next/image';
import { FolderList } from '@/pages/folder';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);
const modalCn = classNames.bind(modalStyles);

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
    <div className={cn('container-add-link', className)}>
      <div className={cn('add-link')}>
        <div className={cn('add-link-input')}>
          <Image
            width={20}
            height={20}
            className={cn('link-icon')}
            src="/images/link.svg"
            alt="클립 아이콘"
          />
          <input
            className={cn('link-input')}
            placeholder="링크를 추가해 보세요"
            onChange={handleInputValueChange}
          />
        </div>
        <button className={cn('cta-add')} onClick={handleOpenModal}>
          추가하기
        </button>
        {openModal && (
          <BaseModal closeModal={closeModal}>
            <div className={modalCn('modal__link-add')}>
              <span className={modalCn('modal__name')}>폴더에 추가</span>
              <span className={modalCn('modal__link')}>{inputValue}</span>
            </div>
            <div className={modalCn('modal__folder-list')}>
              {folderList.map((folder) => {
                const className =
                  folder.name === folderItem
                    ? modalCn('modal__folder--item', 'active')
                    : modalCn('modal__folder--item');
                const onClickFolderItem = () => {
                  setFolderItem(folder.name);
                };

                return (
                  <div
                    key={folder.name}
                    className={className}
                    onClick={onClickFolderItem}
                  >
                    <span className={modalCn('modal__item-name')}>
                      {folder.name}
                    </span>
                    <span className={modalCn('modal__link-count')}>
                      {folder.linkCount}개 링크
                    </span>
                    {folderItem === folder.name && (
                      <Image
                        width={14}
                        height={14}
                        className={modalCn('modal__check-icon')}
                        src="/images/check.png"
                        alt="체크 아이콘"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className={`${modalCn('modal__button')} cta`}>
              추가하기
            </button>
          </BaseModal>
        )}
      </div>
    </div>
  );
}
