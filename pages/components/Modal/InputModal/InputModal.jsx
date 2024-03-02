import styled from 'styled-components';
import {
  Modal,
  ModalContainer,
} from '../../ModalContents/ModalContainer/ModalContainer';
import { ModalContentBox } from '../../ModalContents/ModalContentBox/ModalContentBox';
import { ModalContentButton } from '../../ModalContents/ModalContentButton/ModalContentButton';
import { ModalContentInput } from '../../ModalContents/ModalContentInput/ModalContentInput';
import { ModalContentTitle } from '../../ModalContents/ModalContentTitle/ModalContentTitle';

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <ModalMain>
            <ModalContentInput
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </ModalMain>
        }
        onCloseClick={onCloseClick}
      />
    </ModalContainer>
  );
};

const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 1.5rem;
`;
