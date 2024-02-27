import { useRef, useState } from 'react';
import { NoLink } from '../../NoLink/NoLink';
import { CardList } from '../CardList';
import { DeleteModal } from '../../Modal/DeleteModal/DeleteModal';
import { EditableCard } from '../../Card/EditableCard';
import { AddLinkModal } from '../../Modal/AddLinkModal/AddLinkModal';

export const FolderPageCardList = ({ links, folders }) => {
  const cardListRef = useRef(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [currenModal, setCurrenModal] = useState(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState(null);

  const closeModal = () => setCurrenModal(null);
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal(null);
    }
  };

  if (links.length === 0) return <NoLink />;
  return (
    <CardList ref={cardListRef}>
      {links.map((link) => (
        <EditableCard
          key={link?.id}
          {...link}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrenModal('deleteLink');
          }}
          onAddToFolderClick={() => setCurrenModal('AddToFolder')}
        />
      ))}
      <DeleteModal
        isOpen={currenModal === 'deleteLink'}
        title="링크 삭제"
        description={selectedLinkUrl}
        buttonText="삭제하기"
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currenModal === 'AddToFolder'}
        title="폴더에 추가"
        buttonText="추가하기"
        folders={folders}
        selectedLinkUrl={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </CardList>
  );
};
