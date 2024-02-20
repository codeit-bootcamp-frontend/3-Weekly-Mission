import Image from 'next/image';
import styled from 'styled-components';

export const EditButtons = ({ iconSource, text }) => {
  return (
    <Container>
      <Icon src={iconSource} width={18} height={18} alt={`${text} 아이콘`} />
      <EditText>{text}</EditText>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

const Icon = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
`;

const EditText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--gray60);
`;
