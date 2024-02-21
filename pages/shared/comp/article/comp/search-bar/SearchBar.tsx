import styled from 'styled-components';

import { TSearchBarProps } from '@components/ui/molecules/bar/search-bar/common-search-bar/CommonSearchBar';
import LinkSearchBar from '@components/ui/molecules/bar/search-bar/link-search-bar/LinkSearchBar';

const SearchBar = ({ clearInput, input, onChange }: TSearchBarProps) => {
  return (
    <StSearchAreaWrap>
      <LinkSearchBar clearInput={clearInput} input={input} onChange={onChange} />
      {input && (
        <StSearchResult>
          <StSearchKeyword>{input}</StSearchKeyword>
          으로 검색한 결과입니다.
        </StSearchResult>
      )}
    </StSearchAreaWrap>
  );
};

export default SearchBar;

const StSearchAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  width: 100%;
`;

const StSearchResult = styled.h3`
  color: ${({ theme }) => theme.gray60};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

const StSearchKeyword = styled.span`
  color: ${({ theme }) => theme.gray100};
`;
