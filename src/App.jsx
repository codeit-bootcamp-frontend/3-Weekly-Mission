import './reset.css';
import './assets/pretendard.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import getFormattingCardData from './utils/getFormattingCardData';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  const [heroLinkData, setHeroLinkData] = useState({});
  const [folderData, setFolderData] = useState([]);
  const [folderCardData, setFolderCardData] = useState([]);

  // shared의 Hero 컴포넌트 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/sample/folder')
        .then((data) => {
          // sampe 데이터의 link부분의 key를 카멜 케이스에서 스네이크 케이스로 변환
          const formattedData = getFormattingCardData(data);
          return formattedData;
        })
        .then((data) => {
          setLinkData(() => data.folder.links);
          setHeroLinkData(() => data.folder);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Header의 유저 프로필 데이터
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

  // 폴더 버튼들을 가지고 있는 데이터
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

  // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
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

  // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
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

  // 폴더 카드 정보를 가지고 있는 데이터
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
              <CardList>
                <Search />
                <Card cardData={linkData} />
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
              <CardList>
                <Search />
                <Folder
                  folderData={folderData}
                  HandleOverViewFolderCardData={HandleOverViewFolderCardData}
                  HandleFolderCardData={HandleFolderCardData}
                />
                <Card cardData={folderCardData} />
              </CardList>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
