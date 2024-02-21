/* eslint-disable import/no-cycle */
export { default as Modal } from './Modal';

export { ModalStateContext, ModalDispatchContext, useModalDispatch } from './ModalContext';

export { default as ModalProvider } from './ModalProvider';

export type {
  TModalComponent,
  TModalComponentProps,
  TModalComponentPropsWithoutModalRef,
  TModalDispatchContext,
  TModalHandler,
  TModalStateContext,
} from './types';
