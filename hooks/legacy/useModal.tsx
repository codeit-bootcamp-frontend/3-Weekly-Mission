import { ComponentProps, ComponentType, useState } from 'react';

import { useCloseModal } from '@hooks/useCloseModal';

export interface CloseModal {
  closeModal: () => void;
}
type Obj = Record<string | number | symbol, unknown>;
type ModalComponent = ComponentType<CloseModal & Obj>;
type GenerateModalComponentProps<T> = T extends ModalComponent
  ? ComponentProps<T> & { closeModalCallback?: () => void }
  : never;
type ModalComponentPropsWithoutCloseModalAndModalRef<T extends ModalComponent> = Omit<
  GenerateModalComponentProps<T>,
  'closeModal' | 'modalRef'
>;
type DirectModalComponentProps<T extends ModalComponent> = ModalComponentPropsWithoutCloseModalAndModalRef<T>;

const useModal = <MC extends ModalComponent, MCP extends GenerateModalComponentProps<MC>>() => {
  const [Modal, setModal] = useState<ModalComponent>();

  const [ModalInfo, setModalInfo] = useState<MCP>();
  const { isModalOpen, toggleModal, modalRef } = useCloseModal();

  const closeModal = (closeModalCallback?: () => void) => {
    if (isModalOpen) {
      toggleModal();

      if (typeof closeModalCallback === 'function' && isModalOpen) closeModalCallback();
    }
  };

  const toggleAndSetModal = <VMC extends MC>({
    ModalComponent,
    ...rest
  }: { ModalComponent: VMC } & ModalComponentPropsWithoutCloseModalAndModalRef<VMC>) => {
    toggleModal(); // 여는 순간 실행

    setModalInfo(() => {
      if (!isModalOpen) {
        return rest as unknown as MCP;
      }
    });
    setModal(() => {
      if (!isModalOpen) return ModalComponent;
    });
  };

  const ModalComponent = (directProps?: DirectModalComponentProps<MC>) => {
    const validProps: Obj = {};

    if (ModalInfo) {
      const keysA = Object.keys(ModalInfo);

      for (let i = 0; i < keysA.length; i++) {
        if (ModalInfo[keysA[i]]) validProps[keysA[i]] = ModalInfo[keysA[i]];
      }
    }

    if (!Modal) throw new Error('ModalComponent property should be passed to toggleAndSetModal function');

    return (
      <Modal
        modalRef={modalRef}
        closeModal={() => closeModal(ModalInfo?.closeModalCallback)}
        {...validProps}
        {...directProps}
      />
    );
  };

  return { isModalOpen, toggleAndSetModal, ModalInfo, ModalComponent };
};

export { useModal };
