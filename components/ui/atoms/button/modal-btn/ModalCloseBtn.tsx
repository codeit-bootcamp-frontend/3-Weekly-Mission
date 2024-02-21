import Image from 'next/image';
import styled from 'styled-components';

type TModalCloseBtn = {
  closeModal?: () => void;
};

const ModalCloseBtn = ({ closeModal }: TModalCloseBtn) => {
  return (
    <StModalCloseBtn onClick={closeModal}>
      <Image className='modal__button--close' alt='모달 닫기 버튼' fill src='/images/folder/modal-close.svg' />
    </StModalCloseBtn>
  );
};

export default ModalCloseBtn;

// # attrs : attributes의 약자. 태그에 붙어있는 애들을 미리 정해둘 수 있음.(대신 객체 안에 적어야 함.)
// * 두 가지 방식으로 안에 적어줄 수 있음. (함수 혹은 객체)
const StModalCloseBtn = styled.button.attrs({
  type: 'reset',
})`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  right: 1.6rem;
  top: 1.6rem;

  border-radius: 9999px;
  border-width: 0;
  padding: 0;

  & > .modal__button--close {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
