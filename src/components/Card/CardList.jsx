import styled from 'styled-components';
import convertKeyToCamelCase from '../../utils/convertToCamelCase';
import Card from './Card';

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 20px;

  @media (max-width: 1199px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px 24px;
    }
  }
  @media (max-width: 767px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

export default function CardList({ links }) {
  return (
    <CardBox>
      {links.map((link) => {
        const newLink = convertKeyToCamelCase(link);
        return <Card key={newLink.id} link={newLink} />;
      })}
    </CardBox>
  );
}
