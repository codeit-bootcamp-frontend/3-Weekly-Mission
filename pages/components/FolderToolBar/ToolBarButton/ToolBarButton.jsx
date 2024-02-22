import styled from 'styled-components';

export const ToolBarButton = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>{text}</span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  height: 3.1rem;
  padding: 0 1rem;
  border: 0.1rem solid var(--primary);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    height: 3.7rem;
    padding: 0 1.2rem;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: var(--gray10);
  }

  &:focus {
    background-color: var(--primary);
    color: white;
  }
`;
