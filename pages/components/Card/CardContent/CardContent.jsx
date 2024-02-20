import styled from 'styled-components';

export const CardContent = ({ elapsedTime, description, createdAt }) => {
  return (
    <CardContentContainer>
      <CardContentTime>{elapsedTime}</CardContentTime>
      <CardContentDescription>{description}</CardContentDescription>
      <CardContentCreatedAt>{createdAt}</CardContentCreatedAt>
    </CardContentContainer>
  );
};

const CardContentContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--light-blue);
  }
`;

const CardContentTime = styled.span`
  font-size: 1.3rem;
  color: var(--text--content-gray);
`;

const CardContentDescription = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 150%;
`;

const CardContentCreatedAt = styled.span`
  font-size: 1.4rem;
  color: var(--text-content-black);
`;
