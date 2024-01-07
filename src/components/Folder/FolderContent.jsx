import styled from 'styled-components';
import FolderTitleList from './FolderTitleList';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';

const FolderCardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export default function FolderContent({
  folderList,
  links,
  folderId,
  onClick,
  folderName,
}) {
  return (
    <>
      <FolderTitleList
        folderList={folderList}
        folderId={folderId}
        onClick={onClick}
      />
      <FolderCardArea>
        <FolderCardHeader folderName={folderName} folderId={folderId} />
        <FolderCardList links={links} />
      </FolderCardArea>
    </>
  );
}
