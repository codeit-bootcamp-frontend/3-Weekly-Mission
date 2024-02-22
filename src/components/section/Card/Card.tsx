import { MouseEvent, useState } from 'react';
import timeDifferenceCalculate from '../../../utils/timeElapsedCalculate';
import DropDown from '../DropDown/DropDown';
import BaseModal from '../BaseModal/BaseModal';
import modalStyles from '../BaseModal/BaseModal.module.css';
import styles from './Card.module.css';
import { SharedLink } from '@/pages/shared';
import { LinkType, FolderList } from '@/pages/folder';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  page: LinkType;
  folderList?: FolderList[];
}

export default function Card({ page, folderList }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectDropDownItem, setSelectDropDownItem] = useState('');
  const [folderItem, setFolderItem] = useState('');

  const link = page.url;
  const image = page.imageSource || page['image_source'];
  const description = page.description;

  const logo = '/images/logo.svg';
  const divClass = image
    ? styles['image']
    : `${styles['image']} ${styles['default']}`;
  const imgClass = image
    ? styles['preview']
    : `${styles['preview']} ${styles['default-image']}`;

  const upload = new Date(String(page.createdAt || page['created_at']));
  const timeDiff = timeDifferenceCalculate(upload);

  const temp = upload.toLocaleDateString();
  const uploadDate = temp.slice(0, temp.length - 1);

  let modalContent;

  switch (selectDropDownItem) {
    case '삭제하기':
      modalContent = (
        <>
          <div
            className={`${modalStyles['modal__link-remove']} ${modalStyles['modal--remove']}`}
          >
            <span className={modalStyles['modal__name']}>링크 삭제</span>
            <span className={modalStyles['modal__link']}>{link}</span>
          </div>
          <button
            className={`${modalStyles['modal__button']} ${modalStyles['modal__button--remove']}`}
          >
            변경하기
          </button>
        </>
      );
      break;
    case '폴더에 추가':
      modalContent = (
        <>
          <div className={modalStyles['modal__link-add']}>
            <span className={modalStyles['modal__name']}>폴더에 추가</span>
            <span className={modalStyles['modal__link']}>{link}</span>
          </div>
          <div className={modalStyles['modal__folder-list']}>
            {folderList &&
              folderList.map((element) => {
                const className =
                  element.name === folderItem
                    ? `${modalStyles['modal__folder--item']} ${modalStyles['active']}`
                    : modalStyles['modal__folder--item'];
                const onClickFolderItem = (e: MouseEvent) => {
                  if (e.currentTarget.firstElementChild?.textContent) {
                    setFolderItem(
                      e.currentTarget.firstElementChild?.textContent
                    );
                  }
                };

                return (
                  <div
                    key={element.name}
                    className={className}
                    onClick={onClickFolderItem}
                  >
                    <span className={modalStyles['modal__item-name']}>
                      {element.name}
                    </span>
                    <span className={modalStyles['modal__link-count']}>
                      {element.linkCount}개 링크
                    </span>
                    {folderItem === element.name && (
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
        </>
      );
      break;
    default:
      <span className={modalStyles['modal__name']}>
        의도치 않은 모달입니다
      </span>;
  }

  const handleOpenModal = (type: string) => {
    setSelectDropDownItem(type);
    setOpenModal(true);
  };

  const closeModal = () => {
    setFolderItem('');
    setOpenModal(false);
  };

  return (
    <div className={styles['card-container']}>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles['card']}
      >
        <div className={divClass}>
          <img
            width={340}
            height={200}
            className={imgClass}
            src={image || logo}
            alt="페이지 미리보기"
          />
          <button>
            <Image
              width={34}
              height={34}
              className={styles['star']}
              src="/images/star.png"
              alt="별 모양 아이콘"
            />
          </button>
        </div>
        <div className={styles['card-info']}>
          <div className={styles['time-difference']}>
            <span className={styles['upload-ago']}>{timeDiff} ago</span>
            <div className={styles['card__drop-down']}>
              <DropDown selectItem={handleOpenModal} />
            </div>
          </div>
          <span className={styles['description']}>{description}</span>
          <span className={styles['upload-date']}>{uploadDate}</span>
        </div>
      </Link>
      {openModal && (
        <BaseModal closeModal={closeModal}>{modalContent}</BaseModal>
      )}
    </div>
  );
}
