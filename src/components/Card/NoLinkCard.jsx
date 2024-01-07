import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
  padding: 41px 0 35px;
  line-height: 24px;
`;

export default function NoLinkCard() {
  return <Wrapper>저장된 링크가 없습니다</Wrapper>;
}
