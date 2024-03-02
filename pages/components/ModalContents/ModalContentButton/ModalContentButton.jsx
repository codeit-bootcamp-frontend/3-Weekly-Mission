import styled from 'styled-components';

export const ModalContentButton = ({ children, onClick }) => {
  let buttonClass;

  if (children === '추가하기' || children === '변경하기') {
    buttonClass = 'blue';
  } else if (children === '삭제하기') {
    buttonClass = 'red';
  }

  return (
    <ModalButton onClick={onClick} className={buttonClass}>
      {children}
    </ModalButton>
  );
};

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.1rem;
  background-color: #ff5b56;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gray-light);

  &.red {
    background-color: #ff5b56;
  }

  &.blue {
    background: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
  }
`;
