import { ModalContainer } from '../../ModalContents/ModalContainer/ModalContainer';
import { ModalContentBox } from '../../ModalContents/ModalContentBox/ModalContentBox';
import { ModalContentButton } from '../../ModalContents/ModalContentButton/ModalContentButton';
import { ModalContentTitle } from '../../ModalContents/ModalContentTitle/ModalContentTitle';
import { ModalDescription } from '../../ModalContents/ModalDescription/ModalDescription';
import { ModalFolderItem } from '../../ModalContents/ModalFolderItem/ModalFolderItem';

export const AddLinkModal = ({
  isOpen,
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
          <div>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalDescription>{selectedLinkUrl}</ModalDescription>
          </div>
        }
        content={
          <div>
            <div>
              {folders.map(({ id, name, link }) => (
                <ModalFolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </ModalContainer>
  );
};
