import Link from 'next/link';
import styled from 'styled-components';
import { CardContent } from './CardContent/CardContent';
import { CardImage } from './CardImage/CardImage';

export const Card = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  return (
    <CardContainer>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
  }
`;
