import styled from 'styled-components';

const CardListSearchBar = styled.div`
  box-sizing: border-box;
  width: 1060px;
  padding: 15px 16px;
  border-radius: 10px;
  background: #f5f5f5;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 16px;
    height: 16px;
  }

  input {
    width: 100%;
    background-color: #f5f5f5;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 13px 16px;
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

const Search = () => {
  return (
    <CardListSearchBar>
      <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="돋보기 모양 사진" />
      <input type="search" placeholder="링크를 검색해 보세요." />
    </CardListSearchBar>
  );
};

export default Search;
