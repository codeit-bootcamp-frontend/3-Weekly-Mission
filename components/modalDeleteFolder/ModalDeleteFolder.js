import styled from 'styled-components';
import close from '@/public/close.png';
import Image from 'next/image';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  div {
    background-color: #ffffff;
    padding: 32px 40px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    div {
      gap: 8px;
      padding: 0;
    }

    h1 {
      color: #373740;
      font-size: 1.25rem;
    }

    p {
      color: #9fa6b2;
      font-size: 0.875rem;
    }

    img {
      position: absolute;
      top: -20px;
      right: -25px;
      cursor: pointer;
    }
  }
  button {
    width: 280px;
    height: 51px;
    border-radius: 8px;
    background: #ff5b56;
    color: #ffffff;
    border-style: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const ModalDeletefolder = ({ handleClose, name, handleButton }) => {
  return (
    <ModalContainer>
      <div>
        <div>
          <h1>폴더 삭제</h1>
          <p>{name}</p>
          <Image onClick={handleClose} src={close} alt="close" />
        </div>
        <button onClick={handleButton}>삭제하기</button>
      </div>
    </ModalContainer>
  );
};

export default ModalDeletefolder;
