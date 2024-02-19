import { ComponentProps, MutableRefObject } from 'react';

type Obj = Record<string | number | symbol, unknown>;

export type TModalComponent = React.ComponentType<Obj>;

export type TModalComponentProps<T> = T extends TModalComponent ? ComponentProps<T> & TModalHandler : never;

export type TModalComponentPropsWithoutModalRef<T extends TModalComponent> = Omit<TModalComponentProps<T>, 'modalRef'>;

export type TModalHandler = {
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit?: () => void;
  modalRef: MutableRefObject<HTMLElement | null> | null;
};

export type TModalStateContext = {
  ModalComponent: TModalComponent | null;
  props: TModalHandler & Obj;
  isModalOpen: boolean;
};

export type TModalDispatchContext = {
  open: <T extends TModalComponent>({
    ModalComponent,
    props,
  }: {
    ModalComponent: T;
    props?: TModalComponentPropsWithoutModalRef<T>;
  }) => void;
  close: () => void;
};
