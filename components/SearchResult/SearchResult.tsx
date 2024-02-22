import styled from "styled-components";

interface Props {
  searchName: string;
}

export default function SearchResult({ searchName }: Props) {
  return (
    <Container>
      <NameSpan>{searchName}</NameSpan>
      <Span>으로 검색한 결과입니다.</Span>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 106rem;
  width: 100%;

  @media screen and (max-width: 1124px) {
    max-width: 704px;
  }

  @media screen and (max-width: 765px) {
    max-width: 325px;
  }
`;
const NameSpan = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #373740;
`;

const Span = styled.span`
  color: #9fa6b2;
  font-size: 3rem;
  font-weight: 700;
`;
