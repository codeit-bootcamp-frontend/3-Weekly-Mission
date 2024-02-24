import { useGetFolder } from '@/hooks/useGetFolder';
import { FolderInfo } from './components/FolderInfo/FolderInfo';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Card } from './components/Card/Card';
import { CardList } from './components/CardList/CardList';
import styled from 'styled-components';
import { Footer } from './components/Footer/Footer';

export default function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <SharedPageContainer>
      <NavigationBar />
      <FolderInfo
        profileImage={profileImage}
        ownerName={ownerName}
        folderName={folderName}
      />
      <MainContainer>
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <Card key={link?.id} {...link} />
          ))}
        </CardList>
      </MainContainer>
      <Footer />
    </SharedPageContainer>
  );
}

const SharedPageContainer = styled.div`
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
  row-gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 0 3.2rem;
`;
