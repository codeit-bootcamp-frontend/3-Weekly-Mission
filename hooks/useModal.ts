import { TModalComponent, TModalComponentPropsWithoutModalRef, useModalDispatch } from '@components/provider/modal';
import { TModalComponentHaveCloseModal, TModalComponentPropsWithoutCloseModal } from '@components/provider/modal/types';

export const useModal = <MC extends TModalComponent>() => {
  const { close, open } = useModalDispatch();

  const openModal = <VMC extends MC>({
    Component,
    props,
  }: {
    Component: TModalComponentHaveCloseModal<VMC>;
    props?: TModalComponentPropsWithoutCloseModal<TModalComponentPropsWithoutModalRef<VMC>>;
  }) => {
    open({ ModalComponent: Component, props });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
