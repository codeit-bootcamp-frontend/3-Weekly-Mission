import { useGetLinks } from '@/hooks/useGetLinks';
import { useMemo, useState } from 'react';
import { NoLink } from './components/NoLink/NoLink';
import { CardList } from './components/CardList/CardList';
import { EditableCard } from './components/Card/EditableCard';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { LinkForm } from './components/LinkForm/LinkForm';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { FolderToolBar } from './components/FolderToolBar/FolderToolBar';
import { useGetFolders } from '@/hooks/useGetFolders';
import styled from 'styled-components';

export default function Folder() {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState('all');
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const cardList = useMemo(() => {
    if (loading) return null;
    if (links.length === 0) return <NoLink />;
    return (
      <CardList>
        {links.map((link) => (
          <EditableCard key={link?.id} {...link} />
        ))}
      </CardList>
    );
  }, [loading, links]);

  return (
    <FolderPageContainer>
      <NavigationBar />
      <LinkForm />
      <MainContainer>
        <SearchBar />
        <FolderToolBar
          folders={folders}
          selectedFolderId={selectedFolderId}
          onFolderClick={setSelectedFolderId}
        />
        {cardList}
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
`;
