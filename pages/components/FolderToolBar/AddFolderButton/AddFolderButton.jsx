import Image from 'next/image';
import styled from 'styled-components';

export const AddFolderButton = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>폴더 추가</span>
      <Image
        src="/images/add.svg"
        width={16}
        height={16}
        alt="폴더추가이미지"
      />
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  height: 3.5rem;
  padding: 0 2.4rem;
  border: 0.1rem solid var(--primary);
  border-radius: 2rem;
  background-color: white;
  color: var(--primary);

  @media (min-width: 768px) {
    padding: 0;
    border: 0.1rem solid white;
    background-color: transparent;
  }
`;
