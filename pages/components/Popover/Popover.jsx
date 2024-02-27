import { Portal } from '@/pages/Portal/Portal';
import { useBackgroundClick } from '@/util/useBackgroundClick';
import { useCallback, useRef } from 'react';
import styled from 'styled-components';

export const Popover = ({
  children,
  isOpen,
  onBackgroundClick,
  anchorRef,
  disableCloseWithBackgroundClick = false,
}) => {
  const popoverRef = useRef(null);

  const handleBackgroundClick = useCallback(
    (event) => {
      const isPopover = popoverRef.current?.contains(event.target);
      const isAnchor = anchorRef.current?.contains(event.target);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current}>
      <PopoverContainer>{children}</PopoverContainer>
    </Portal>
  );
};

const PopoverContainer = styled.div`
  position: absolute;
  top: 23rem;
  right: -5.7rem;
  z-index: 50;
`;
