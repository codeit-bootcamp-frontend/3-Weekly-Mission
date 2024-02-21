import { PropsWithChildren, useMemo, useState } from 'react';

import { useCloseModal } from '@hooks/useCloseModal';

import {
  ModalDispatchContext,
  ModalStateContext,
  TModalComponent,
  TModalComponentPropsWithoutModalRef,
  TModalDispatchContext,
  TModalHandler,
} from '.';

type TModalProviderProps = PropsWithChildren;

const ModalProvider = <MC extends TModalComponent>({ children }: TModalProviderProps) => {
  const [{ ModalComponent, props }, setModal] = useState<{
    ModalComponent: MC | null;
    props: TModalHandler & Record<string | number | symbol, any>;
  }>({
    ModalComponent: null,
    props: {
      modalRef: null,
    },
  });
  const { isModalOpen, modalRef, toggleModal } = useCloseModal();

  // 양방향 onClose, onOpen, onSubmit 바인딩
  // 열 때 닫을 때 둘 다 callback 받아야 함.
  // props는 모달로 전달할 프롭

  const open = <VMC extends MC>({
    ModalComponent,
    props,
  }: {
    ModalComponent: VMC;
    props?: TModalComponentPropsWithoutModalRef<VMC>;
  }) => {
    if (isModalOpen === false) {
      toggleModal();
      setModal(() => {
        if (ModalComponent && props) return { ModalComponent, props: { ...props, modalRef } };

        return { ModalComponent, props: { modalRef } };
      });
    }
  };

  const close = () => {
    if (isModalOpen === true) toggleModal();
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const modalState = { ModalComponent, props, isModalOpen };
  const dispatch = useMemo(() => ({ open, close }), [isModalOpen]) as TModalDispatchContext;

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={modalState}>{children}</ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};

export default ModalProvider;
