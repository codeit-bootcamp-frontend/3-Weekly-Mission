import { ComponentProps, MutableRefObject } from 'react';

type Obj = Record<string | number | symbol, unknown>;

/**
 * TODO: optional 하게 할지 required로 할지 고민 중.
 * - Dim 영역 눌렀을 때 닫히게 하고 싶으면 있어야 하고 아니면 말고.
 */
interface RequiredModalProp {
  closeModal?: (callback?: VoidFunction) => void;
  // closeModal: (callback?: VoidFunction) => void;
  modalRef?: MutableRefObject<HTMLElement | null> | null;
  // modalRef: MutableRefObject<HTMLElement | null> | null;
}

/**
 * TODO: required but... optional 하게 할지 required로 할지 고민 중.
 * ```ts
 * export type TModalComponent = React.ComponentType<Obj & Required<RequiredModalProp>>;
 * ```
 */
export type TModalComponent = React.ComponentType<Obj & RequiredModalProp>;

export type TModalComponentHaveCloseModal<T extends TModalComponent> =
  ComponentProps<T> extends RequiredModalProp ? T : never;

export type TModalComponentProps<T> = T extends TModalComponent ? ComponentProps<T> & TModalHandler : never;

export type TModalComponentPropsWithoutModalRef<T extends TModalComponent> = Omit<TModalComponentProps<T>, 'modalRef'>;

export type TModalComponentPropsWithoutCloseModal<T extends Obj> = Omit<T, 'closeModal'>;

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
    props?: TModalComponentPropsWithoutCloseModal<TModalComponentPropsWithoutModalRef<T>>;
  }) => void;
  close: () => void;
};
