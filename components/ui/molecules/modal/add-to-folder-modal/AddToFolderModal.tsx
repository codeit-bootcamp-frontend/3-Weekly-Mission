import { MutableRefObject, useState } from 'react';

import styled from 'styled-components';

import Modal from '..';
import { StModalSubText } from '../StModalSubText';

const mockArray = [
  { folderName: '코딩팁', linkCount: 7 },
  { folderName: '채용 사이트', linkCount: 12 },
  { folderName: '유용한 글', linkCount: 30 },
  { folderName: '나만의 장소', linkCount: 3 },
];

type TAddToFolderModal = {
  modalName?: string;
  linkUrl?: string;
  closeModal?: (callback?: VoidFunction) => void;
  modalRef?: MutableRefObject<HTMLElement | null> | null;
};
/**
 * @description 폴더에 추가 모달
 */
const AddToFolderModal = ({ modalName = '폴더에 추가', linkUrl, closeModal, modalRef }: TAddToFolderModal) => {
  const [selectedFolder, setSelectedFolder] = useState<string[]>([]);
  const imgUrl = '/images/folder/folder-icon-check.svg';

  const onSelectHandler = (folderName: string) => {
    setSelectedFolder((prev) => {
      if (prev.includes(folderName)) return [...prev.filter((f) => f !== folderName)];

      return [...prev, folderName];
    });
  };

  return (
    <Modal.StModalDim>
      <Modal.StModalWrapper
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
        $rowGap={2.4}
      >
        <Modal.StModalLabel as='div' $rowGap={0.8}>
          {modalName}
          <StModalSubText>{linkUrl}</StModalSubText>
        </Modal.StModalLabel>
        <StAddFolderListUl>
          {mockArray.map(({ folderName, linkCount }) => {
            const isSelected = selectedFolder.includes(folderName);

            return (
              <StAddFolderList key={folderName} $isSelected={isSelected} onClick={() => onSelectHandler(folderName)}>
                <StAddFolderListTextBox>
                  {folderName}
                  <StAddFolderListLinkCount>{linkCount}개 링크</StAddFolderListLinkCount>
                </StAddFolderListTextBox>
                {isSelected && <StFolderCheckImg alt='폴더 체크 상태 이미지' src={imgUrl} />}
              </StAddFolderList>
            );
          })}
        </StAddFolderListUl>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn>추가하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalDim>
  );
};

export default AddToFolderModal;

const StAddFolderListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const StAddFolderList = styled.li<{ $isSelected?: boolean }>`
  cursor: pointer;

  padding: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--Linkbrary-primary-color, #6D6AFE)' : 'var(--Linkbrary-gray100, #373740)'};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */

  border-radius: 0.8rem;
  background-color: ${({ $isSelected }) => $isSelected && 'var(--Linkbrary-bg, #f0f6ff)'};

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

const StAddFolderListLinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
`;

const StAddFolderListTextBox = styled.div`
  display: flex;
  column-gap: 0.8rem;

  align-items: center;
`;

const StFolderCheckImg = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
