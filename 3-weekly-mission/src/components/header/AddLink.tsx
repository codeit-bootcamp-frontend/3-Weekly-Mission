import { ChangeEvent, useState } from 'react';
import BaseModal from '../../section/BaseModal/BaseModal';
import modalStyles from '../../section/BaseModal/BaseModal.module.css';
import Image from 'next/image';
import { FolderList } from '@/pages/folder';
import styled from 'styled-components';

const ContainerAddLink = styled.div`
  width: 100%;
  display: flex;
  padding: 6rem 19rem 9rem;
  flex-direction: column;
  align-items: center;
`;

const ContainerAddLinkFixed = styled.div`
  width: 100%;
  padding: 2.4rem 0;
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 5;

  background-color: var(--linkbrary-bg);
`;

const AddLinkWrapper = styled.div`
  display: flex;
  max-width: 80rem;
  width: 100%;
  padding: 1.6rem 2rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

const AddLinkInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 80%;
`;

const LinkImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const LinkInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const LinkInputPlaceholder = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */
`;

const CtaAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3.7rem;
  cursor: pointer;

  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
`;

const ContainerAddLinkResponsive = styled.div`
  padding: 6rem calc((100% - 78.32rem) / 2) 9rem;
`;

const ContainerAddLinkFixedResponsive = styled.div`
  padding: 2.4rem calc((100% - 78.32rem) / 2);
`;

const ContainerAddLinkResponsiveMedium = styled.div`
  padding: 6rem 3.2rem 9rem;
`;

const ContainerAddLinkFixedResponsiveMedium = styled.div`
  padding: 2.4rem 3.2rem;
`;

const ContainerAddLinkResponsiveSmall = styled.div`
  padding: 2.4rem 3.2rem 4rem;
`;

const ContainerAddLinkFixedResponsiveSmall = styled.div`
  padding: 1.6rem 3.2rem;
`;


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
    <ContainerAddLink >
      <AddLinkWrapper>
        <AddLinkInput >
          <LinkImage
            width={20}
            height={20}
            src="/images/link.svg"
            alt="클립 아이콘"
          />
          <LinkInput
            placeholder="링크를 추가해 보세요"
            onChange={handleInputValueChange}
          />
        </AddLinkInput>
        <CtaAdd onClick={handleOpenModal}>
          추가하기
        </CtaAdd>
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
      </AddLinkWrapper>
    </ContainerAddLink>
  );
  
}