import { useGetLinks } from '@/hooks/useGetLinks';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { LinkForm } from './components/LinkForm/LinkForm';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { FolderToolBar } from './components/FolderToolBar/FolderToolBar';
import { useGetFolders } from '@/hooks/useGetFolders';
import styled from 'styled-components';
import { FolderPageCardList } from './components/CardList/FolderPageCardList/FolderPageCardList';

export default function Folder() {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState('all');
  const { data: links } = useGetLinks(selectedFolderId);

  return (
    <FolderPageContainer>
      <NavigationBar />
      <LinkForm folders={folders} />
      <MainContainer>
        <SearchBar />
        <FolderToolBar
          folders={folders}
          selectedFolderId={selectedFolderId}
          onFolderClick={setSelectedFolderId}
        />
        <FolderPageCardList links={links} folders={folders} />
      </MainContainer>
      <Footer />
    </FolderPageContainer>
  );
}

const FolderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 2.4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 3.2rem;
  min-height: calc(100vh - 60rem);
`;
