import { useState } from 'react';
import styled from 'styled-components';
import NoLinkCard from '../Card/NoLinkCard';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';

export default function FolderBody({
  toggleModalClick,
  updateModalName,
  setUserId,
  setFolderId,
  links,
  folderList,
  folderId,
}) {
  const [folderName, setFolderName] = useState('전체');

  const handleClickTitle = (item) => {
    setUserId(1); // test
    setFolderId(item.id);
    setFolderName(item.name);
  };

  return (
    <Wrapper>
      <SearchBar />
      {links.length === 0 && folderList.length === 0 ? (
        <NoLinkCard />
      ) : (
        <FolderContent
          folderList={folderList}
          links={links}
          folderId={folderId}
          onClick={handleClickTitle}
          folderName={folderName}
          toggleModalClick={toggleModalClick}
          updateModalName={updateModalName}
        />
      )}
      {links.length === 0 && folderList.length !== 0 ? <NoLinkCard /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
