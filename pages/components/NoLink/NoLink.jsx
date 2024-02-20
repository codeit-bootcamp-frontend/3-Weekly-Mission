import styled from 'styled-components';

export const NoLink = () => {
  return (
    <NoLinkContainer>
      <NoLinkMessage>저장된 링크가 없습니다.</NoLinkMessage>
    </NoLinkContainer>
  );
};

const NoLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.4rem;

  @media (min-width: 768px) {
    padding-top: 4.1rem;
  }
`;

const NoLinkMessage = styled.span`
  font-size: 1.4rem;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
