import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import getFetchRequest from '../../utils/getFetchRequest';
import { BASE_API_HOST } from '../../constants/api';
import CardList from '../Card/CardList';
import Loading from '../Loading/Loading';

const SharedBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px;
  @media (max-width: 1199px) {
    & {
      padding: 40px 32px;
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 20px 32px;
    }
  }
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 767px) {
    & {
      gap: 32px;
    }
  }
`;

export default function SharedBody() {
  const API_FOLDER = 'sample/folder';
  const [links, setLink] = useState([]);
  const [condition, setCondition] = useState('noData');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCondition('loading');
    const getLinks = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setLink(result.folder.links);
        setCondition('getInfoSuccess');
      } catch (e) {
        setErrorMessage(e.message);
        setCondition('error');
      }
    };
    getLinks();
  }, []);

  return (
    <SharedBodyContainer>
      {
        {
          loading: <Loading />,
          getInfoSuccess: (
            <ContentsBox>
              <SearchBar />
              <CardList links={links} />
            </ContentsBox>
          ),
          error: errorMessage,
          noData: '데이터가 없습니다.',
        }[condition]
      }
    </SharedBodyContainer>
  );
}
