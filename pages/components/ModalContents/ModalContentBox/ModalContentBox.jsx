import Image from 'next/image';
import styled from 'styled-components';

export const ModalContentBox = ({ header, content, onCloseClick }) => {
  return (
    <Container>
      <button onClick={onCloseClick}>
        <CloseImage
          src="/images/close.svg"
          width={24}
          height={24}
          alt="닫기 버튼"
        />
      </button>
      <MainContents>
        {header}
        {content}
      </MainContents>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  position: relative;
  width: 36rem;
  height: fit-content;
  padding: 3.2rem 4rem;
  border-radius: 1.5rem;
  background-color: white;
`;

const CloseImage = styled(Image)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;
`;
