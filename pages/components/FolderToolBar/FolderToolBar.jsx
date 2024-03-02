import styled from 'styled-components';
import { AddFolderButton } from './AddFolderButton/AddFolderButton';
import { EditButtons } from './EditButton/EditButtons';
import { ToolBarButton } from './ToolBarButton/ToolBarButton';
import { BUTTONS, KAKAO_SHARE_DATA } from './constant';
import { useState } from 'react';
import { InputModal } from '../Modal/InputModal/InputModal';
import { DeleteModal } from '../Modal/DeleteModal/DeleteModal';
import { ShareModal } from '../Modal/ShareModal/ShareModal';
import { useKakaoSdk } from '@/util/useKakaoSdk';
import { copyToClipboard } from '@/util/copyToClipboard';

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const { shareKakao } = useKakaoSdk();
  const [currentModal, setCurrentModal] = useState(null);

  //TODO : window사용부분 Next에서 사용하기에 문제가 있음, 일단 빈문자로 예외 처리해서 넝어가고 나중에 getServerSideProps,getInitialProps 리팩토링 할 것
  const shareLink =
    typeof window !== 'undefined'
      ? `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`
      : '';

  const closeModal = () => setCurrentModal(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };
  const handleFaceBookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  const handleLinkCopyClick = () => copyToClipboard(shareLink);

  const folderName =
    'all' === selectedFolderId
      ? '전체'
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  return (
    <ToolBarContainer>
      <ToolBarButtonWrapper>
        <ToolBarButton
          key={'all'}
          text={'전체'}
          onClick={() => onFolderClick('all')}
        />
        {folders?.map(({ id, name }) => (
          <ToolBarButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
          />
        ))}
      </ToolBarButtonWrapper>
      <AddButtonWrapper>
        <AddFolderButton onClick={() => setCurrentModal('addFolder')} />
        <InputModal
          isOpen={currentModal === 'addFolder'}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </AddButtonWrapper>
      <FolderName>{folderName}</FolderName>
      {selectedFolderId !== 'all' && (
        <Edit>
          {BUTTONS.map(({ iconSource, text, modalId }) => (
            <EditButtons
              key={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
          <ShareModal
            isOpen={currentModal === 'share'}
            folderName={folderName}
            title="폴더 공유"
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFaceBookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === 'rename'}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <DeleteModal
            isOpen={currentModal === 'delete'}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
        </Edit>
      )}
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.2rem;
  margin-top: 1.6rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      'toolBar-Button toolBar-Button add-button'
      'folder-name Edit Edit';
    justify-content: space-between;
    align-items: center;
    row-gap: 2.4rem;
    column-gap: 1.2rem;
    width: 100%;
  }
`;

const ToolBarButtonWrapper = styled.div`
  grid-area: toolBar-Button;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.2rem;
  flex-grow: 1;
`;

const AddButtonWrapper = styled.div`
  grid-area: add-button;
  position: fixed;
  bottom: 10.1rem;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 767px) {
    justify-self: flex-end;
    position: static;
    transform: none;
  }
`;

const FolderName = styled.h2`
  grid-area: folder-name;
  margin-top: 1.6rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 2.4rem;
  }
`;

const Edit = styled.div`
  justify-self: flex-start;
  grid-area: Edit;
  display: flex;
  column-gap: 1.2rem;

  @media (min-width: 768px) {
    justify-self: flex-end;
  }
`;
