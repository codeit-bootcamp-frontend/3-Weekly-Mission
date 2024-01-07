import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';
import { API_FOLDERS, API_LINKS, BASE_API_HOST } from '../../constants/api';
import useFolderLinks from '../../Hooks/useFolderLinks';
import NoLinkCard from '../Card/NoLinkCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default function FolderBody() {
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('전체');

  const handleTitleClick = (item) => {
    setFolderId(item.id);
    setFolderName(item.name);
  };

  const links = useFolderLinks(BASE_API_HOST, `${API_LINKS}`, folderId);
  const folderList = useFolderLinks(BASE_API_HOST, `${API_FOLDERS}`);

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
          onClick={handleTitleClick}
          folderName={folderName}
        />
      )}
      {links.length === 0 && folderList.length !== 0 && <NoLinkCard />}
    </Wrapper>
  );
}
