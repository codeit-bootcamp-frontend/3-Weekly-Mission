import { TModalComponent, TModalComponentPropsWithoutModalRef, useModalDispatch } from '@components/provider/modal';

export const useModal = <MC extends TModalComponent>() => {
  const { close, open } = useModalDispatch();

  const openModal = <VMC extends MC>({
    Component,
    props,
  }: {
    Component: VMC;
    props?: TModalComponentPropsWithoutModalRef<VMC>;
  }) => {
    open({ ModalComponent: Component, props });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
