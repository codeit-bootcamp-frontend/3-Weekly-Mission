import styled from 'styled-components';

export const CardImage = ({ imageSource, alt }) => {
  const DEFAULT_IMAGE = 'images/card-default.png';

  return (
    <CardImageContainer
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE} )` }}
      alt={alt}
    />
  );
};

const CardImageContainer = styled.div`
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;

  @media (min-width: 768px) {
    min-height: 20rem;
    height: 20rem;
  }

  &:hover {
    background-size: 130%;
  }
`;
