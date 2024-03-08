import { ComponentProps, ComponentType, useState } from 'react';

import { useCloseModal } from '@hooks/useCloseModal';

export interface CloseModal {
  closeModal: () => void;
}
type Obj = Record<string | number | symbol, any>;
type ModalComponent = ComponentType<CloseModal & Obj>;
type GenerateModalComponentProps<T> = T extends ModalComponent
  ? ComponentProps<T> & { closeModalCallback?: VoidFunction }
  : never;
type ModalComponentPropsWithoutCloseModalAndModalRef<T extends ModalComponent> = Omit<
  GenerateModalComponentProps<T>,
  'closeModal' | 'modalRef'
>;
type DirectModalComponentProps<T extends ModalComponent> = ModalComponentPropsWithoutCloseModalAndModalRef<T>;

/**
 * @deprecated use context useModal hook instead
 */
const useModal = <MC extends ModalComponent, MCP extends ModalComponentPropsWithoutCloseModalAndModalRef<MC>>() => {
  const [Modal, setModal] = useState<ModalComponent>();

  const [ModalInfo, setModalInfo] = useState<MCP>();
  const { isModalOpen, toggleModal, modalRef } = useCloseModal();

  const closeModal = (closeModalCallback?: VoidFunction) => {
    if (isModalOpen) {
      toggleModal();

      if (typeof closeModalCallback === 'function') closeModalCallback();
    }
  };

  const toggleAndSetModal = <VMC extends MC>({
    ModalComponent,
    ...rest
  }: { ModalComponent: VMC } & ModalComponentPropsWithoutCloseModalAndModalRef<VMC>) => {
    toggleModal(); // 여는 순간 실행

    if (!isModalOpen) {
      setModalInfo(() => rest as unknown as MCP);
      setModal(() => ModalComponent);
    }
  };

  const ModalComponent = (directProps?: DirectModalComponentProps<MC>) => {
    if (!Modal) throw new Error('ModalComponent property should be passed to toggleAndSetModal function');

    return (
      <Modal
        modalRef={modalRef}
        closeModal={() => closeModal(ModalInfo?.closeModalCallback)}
        {...ModalInfo}
        {...directProps}
      />
    );
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
