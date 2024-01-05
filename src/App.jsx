import './reset.css';
import './assets/pretendard.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import getFetch from './utils/getFetch';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';
import ShareDescription from './components/Hero/ShareDescription/ShareDescription';
import LinkCreator from './components/Hero/LinkCreator.jsx/LinkCreator';
import Search from './components/CardList/Search/Search';
import Card from './components/CardList/Card/Card';
import Folder from './components/Folder/Folder';

const GlobalStyle = createGlobalStyle`
  :root {
  --privary: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;
  --gray1: #3e3e43;
  --gray2: #9fa6b2;
  --gray3: #ccd5e3;
  --gray4: #e7effb;
  --gray5: #f0f6ff;
}

`;

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  const [heroLinkData, setHeroLinkData] = useState({});
  const [folderData, setFolderData] = useState([]);
  const [folderCardData, setFolderCardData] = useState([]);

  const HandleOverViewFolderCardData = () => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/links').then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const HandleFolderCardData = (id) => {
    try {
      getFetch('bootcamp-api.codeit.kr', `api/users/1/links?folderId=${id}`).then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/sample/folder').then((data) => {
        setLinkData(() => data.folder.links);
        setHeroLinkData(() => data.folder);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1').then((user) => {
        setUserData({ ...user.data[0] });
        setLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/folders').then((FolderData) => {
        setFolderData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/links').then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header login={login} userData={userData} />
      <Routes>
        <Route
          path="/shared"
          element={
            <>
              <Hero>
                <ShareDescription heroLinkData={heroLinkData} />
              </Hero>
              <CardList linkData={linkData}>
                <Search className="links__search" />
                <Card cardData={linkData} className="links__card" />
              </CardList>
            </>
          }
        />
        <Route
          path="/folder"
          element={
            <>
              <Hero>
                <LinkCreator />
              </Hero>
              <CardList linkData={linkData}>
                <Search className="links__search" />
                <Folder
                  folderData={folderData}
                  HandleOverViewFolderCardData={HandleOverViewFolderCardData}
                  HandleFolderCardData={HandleFolderCardData}
                />
                <Card cardData={folderCardData} className="links__card" />
              </CardList>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
