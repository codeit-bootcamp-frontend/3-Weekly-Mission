import styled from 'styled-components';
import { Modal } from '../../ModalContents/ModalContainer/ModalContainer';
import { ModalContentBox } from '../../ModalContents/ModalContentBox/ModalContentBox';
import { ModalContentButton } from '../../ModalContents/ModalContentButton/ModalContentButton';
import { ModalContentTitle } from '../../ModalContents/ModalContentTitle/ModalContentTitle';
import { ModalDescription } from '../../ModalContents/ModalDescription/ModalDescription';

export const DeleteModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <ModalHeader>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalDescription>{description}</ModalDescription>
          </ModalHeader>
        }
        content={
          <ModalContentButton onClick={onClick}>
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;
`;
