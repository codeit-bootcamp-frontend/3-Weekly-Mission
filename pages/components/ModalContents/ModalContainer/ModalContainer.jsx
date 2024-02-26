import { Portal } from '@/pages/Portal/Portal';
import styled from 'styled-components';

export const Modal = ({
  children,
  isOpen = false,
  onBackdropClick,
  onKeyDown,
}) => {
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <PorTalContainer
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </PorTalContainer>
    </Portal>
  );
};

const PorTalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;
