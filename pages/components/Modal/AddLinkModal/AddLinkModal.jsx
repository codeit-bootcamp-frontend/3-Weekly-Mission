import styled from 'styled-components';
import { ModalContainer } from '../../ModalContents/ModalContainer/ModalContainer';
import { ModalContentBox } from '../../ModalContents/ModalContentBox/ModalContentBox';
import { ModalContentButton } from '../../ModalContents/ModalContentButton/ModalContentButton';
import { ModalContentTitle } from '../../ModalContents/ModalContentTitle/ModalContentTitle';
import { ModalDescription } from '../../ModalContents/ModalDescription/ModalDescription';
import { ModalFolderItem } from '../../ModalContents/ModalFolderItem/ModalFolderItem';

export const AddLinkModal = ({
  isOpen,
  title,
  buttonText,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onkeyDown,
}) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onkeyDown}
    >
      <ModalContentBox
        header={
          <ModalHeader>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalDescription>{selectedLinkUrl}</ModalDescription>
          </ModalHeader>
        }
        content={
          <ModalContent>
            <FolderList>
              {folders.map(({ id, name, link }) => (
                <ModalFolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </FolderList>
            <ModalContentButton onClick={onAddClick}>
              {buttonText}
            </ModalContentButton>
          </ModalContent>
        }
        onCloseClick={onCloseClick}
      />
    </ModalContainer>
  );
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;
`;

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  max-height: 17.2rem;
  overflow-y: auto;
  row-gap: 0.4rem;
`;
