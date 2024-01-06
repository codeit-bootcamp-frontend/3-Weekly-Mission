import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardImg, { CardMainImg } from './CardImg/CardImg';
import CardContent, { CardContentContainer } from './CardContent/CardContent';

const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 20px;

  @media (max-width: 1123px) {
    display: grid;
    grid-template-columns: repeat(2, 340px);
    gap: 24px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 100%;
    gap: 24px;
  }
`;

const CardLink = styled(Link)`
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  &:hover ${CardMainImg} {
    transform: scale(1.3);
  }

  &:hover ${CardContentContainer} {
    background: var(--gray5);
  }
`;

const AlertNotStoredLink = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: 1123px) {
    width: 704px;
  }
`;

const Card = ({ cardData }) => {
  return (
    <CardListContainer>
      {cardData.length !== 0 ? (
        cardData.map((link) => {
          return (
            <CardLink to={link.url} target="_blank" key={link.id} rel="noreferrer">
              <CardImg link={link} />
              <CardContent link={link} />
            </CardLink>
          );
        })
      ) : (
        <AlertNotStoredLink>저장된 링크가 없습니다</AlertNotStoredLink>
      )}
    </CardListContainer>
  );
};

export default Card;
