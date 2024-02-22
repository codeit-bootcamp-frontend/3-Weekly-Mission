import styled from "styled-components";

export default function NoLinkBlock() {
  return (
    <Container>
      <Span>저장된 링크가 없습니다.</Span>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 41px 0 35px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 756px) {
    font-size: 14px;
  }
`;
