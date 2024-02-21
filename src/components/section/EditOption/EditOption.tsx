import { useState, useEffect } from 'react';
import BaseModal from '../BaseModal/BaseModal';
import styles from './EditOption.module.css';
import modalStyles from '../BaseModal/BaseModal.module.css';
import { FolderInfo } from '@/pages/folder';
import Image from 'next/image';
import classNames from 'classnames';

const cn = classNames.bind(styles);
const modalCn = classNames.bind(modalStyles);

interface Props {
  src: string;
  optionName: '이름 변경' | '삭제' | '공유';
  userId?: number;
  folder: FolderInfo;
}

export default function EditOption({ src, optionName, userId, folder }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { Kakao } = window;

  let modalContent;
  switch (optionName) {
    case '이름 변경':
      modalContent = (
        <>
          <span className={modalCn('modal__name')}>폴더 이름 변경</span>
          <div className={modalCn('modal__folder-add')}>
            <input
              className={modalCn('modal__input')}
              placeholder="내용 입력"
              defaultValue={folder.name}
            />
            <button className={`${modalCn('modal__button')} cta`}>
              변경하기
            </button>
          </div>
        </>
      );
      break;
    case '삭제':
      modalContent = (
        <>
          <div className={modalCn('modal__folder-remove', 'modal--remove')}>
            <span className={modalCn('modal__name')}>폴더 삭제</span>
            <span className={modalCn('modal__folder-name')}>{folder.name}</span>
          </div>
          <button className={modalCn('modal__button', 'modal__button--remove')}>
            삭제하기
          </button>
        </>
      );
      break;
    case '공유': {
      const currentUrl = window.location.href;
      const pathNameIndex = currentUrl.lastIndexOf('/');
      const hostName = currentUrl.slice(0, pathNameIndex);
      const shareLink = hostName + `/shared?user=${userId}&folder=${folder.id}`;

      const handleShareToKakaotalk = () => {
        Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: '폴더 공유',
            description: `${folder.name}의 링크들`,
            imageUrl: '',
            link: {
              mobileWebUrl: shareLink,
            },
          },
          buttons: [
            {
              title: '폴더 링크 확인하러 가기',
              link: {
                mobileWebUrl: shareLink,
              },
            },
          ],
        });
      };

      const handleShareToFacebook = () => {
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareLink}`);
      };

      const handleCopyClipBoard = async () => {
        try {
          await navigator.clipboard.writeText(shareLink);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (error) {
          alert('복사에 실패했습니다.');
        }
      };

      modalContent = (
        <>
          <div className={modalCn('modal__folder-share')}>
            <span className={modalCn('modal__name')}>폴더 공유</span>
            <span className={modalCn('modal__link')}>{folder.name}</span>
          </div>
          <div className={modalCn('modal__share-buttons')}>
            <div
              className={modalCn('modal__share-button', 'kakaotalk')}
              onClick={handleShareToKakaotalk}
            >
              <Image
                width={42}
                height={42}
                className={modalCn('modal__share-icon')}
                src="/images/sharekakaotalk.png"
                alt="카카오톡 아이콘"
              />
              <span className={modalCn('modal__share-type')}>카카오톡</span>
            </div>
            <div
              className={modalCn('modal__share-button', 'facebook')}
              onClick={handleShareToFacebook}
            >
              <Image
                width={42}
                height={42}
                className={modalCn('modal__share-icon')}
                src="/images/sharefacebook.png"
                alt="페이스북 아이콘"
              />
              <span className={modalCn('modal__share-type')}>페이스북</span>
            </div>
            <div
              className={modalCn('modal__share-button', 'link-copy')}
              onClick={handleCopyClipBoard}
            >
              <Image
                width={42}
                height={42}
                className={modalCn('modal__share-icon')}
                src="/images/shareclip.png"
                alt="클립 아이콘"
              />
              <span className={modalCn('modal__share-type')}>링크 복사</span>
            </div>
          </div>
        </>
      );
      break;
    }
    default:
      <span className={modalCn('modal__name')}>의도치 않은 모달입니다</span>;
  }

  const onClickEditOption = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={cn('option')} onClick={onClickEditOption}>
        <Image width={18} height={18} src={src} alt={optionName + ' 아이콘'} />
        <span className={cn('option-name')}>{optionName}</span>
      </div>
      {openModal && (
        <BaseModal closeModal={closeModal}>{modalContent}</BaseModal>
      )}
    </>
  );
}
