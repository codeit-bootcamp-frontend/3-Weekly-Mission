import styled from 'styled-components';
import close from '@/public/close.png';
import Image from 'next/image';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    background: white;
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

      h1 {
        color: #373740;
        font-size: 1.25rem;
      }

      p {
        width: 280px;
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
      padding: 16px 20px;
      border-radius: 8px;
      background: #ff5b56;
      border: 0px;
      cursor: pointer;

      color: #f5f5f5;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const ModalDeleteLink = ({ handleClose, handleDelete, link }) => {
  return (
    <ModalContainer onClick={e => e.preventDefault()}>
      <div>
        <div>
          <h1>링크 삭제</h1>
          <p>{link}</p>
          <Image onClick={handleClose} src={close} alt="close" />
        </div>
        <button onClick={handleDelete}>삭제하기</button>
      </div>
    </ModalContainer>
  );
};

export default ModalDeleteLink;
