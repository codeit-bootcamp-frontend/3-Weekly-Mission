import { Portal } from '@/pages/Portal/Portal';
import { useBackgroundClick } from '@/util/useBackgroundClick';
import { useCallback, useRef } from 'react';

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
      <div>{children}</div>
    </Portal>
  );
};
