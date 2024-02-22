import Image from 'next/image';
import styled from 'styled-components';

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput type="search" placeholder="링크를 검색해 보세요." />
      <SearchBarIcon
        src="/images/search.svg"
        width={16}
        height={16}
        alt="돋보기 아이콘"
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchBarInput = styled.input`
  width: 100%;
  max-width: 106rem;
  height: 4.3rem;

  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: var(--gray-light);
  font-size: 1.4rem;

  ::placeholder {
    color: var(--text-content-gray);
  }

  @media (min-width: 768px) {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

const SearchBarIcon = styled(Image)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
`;
