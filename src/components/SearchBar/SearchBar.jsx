import styled from 'styled-components';
import SearchIconImg from '../../asset/SearchIcon.svg';

const SearchForm = styled.form`
  width: 1060px;
  @media (max-width: 1199px) {
    & {
      width: 704px;
    }
  }
  @media (max-width: 767px) {
    & {
      width: 325px;
    }
  }
`;
const SearchInputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 54px;
  text-align: center;
  background-color: #f5f5f5;
  padding: 15px 16px;
  border-radius: 10px;
  @media (max-width: 767px) {
    & {
      height: 43px;
      padding: 13px 16px;
    }
  }
`;
const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;
const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #f5f5f5;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  @media (max-width: 767px) {
    & {
      font-size: 14px;
      line-height: normal;
    }
  }
`;

export default function SearchBar() {
  return (
    <SearchForm>
      <SearchInputWrapper htmlFor="searchValue">
        <SearchIcon src={SearchIconImg} alt="SearchIcon" />
        <SearchInput
          id="searchValue"
          type="text"
          placeholder="링크를 검색해 보세요."
        />
      </SearchInputWrapper>
    </SearchForm>
  );
}
