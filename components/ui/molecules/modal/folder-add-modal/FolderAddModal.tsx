import { MutableRefObject } from 'react';

import Modal from '..';

/**
 * @description 폴더 추가 모달
 */

type TFolderAddModalProps = {
  modalName?: string;
  closeModal?: (callback?: VoidFunction) => void;
  modalRef?: MutableRefObject<HTMLDivElement>;
};

const FolderAddModal = ({ modalName = '폴더 추가', closeModal, modalRef }: TFolderAddModalProps) => {
  return (
    <Modal.StModalDim ref={modalRef}>
      <Modal.StModalWrapper>
        <Modal.StModalLabel htmlFor='folder-add'>
          {modalName}
          <Modal.StModalInput placeholder='내용 입력' id='folder-add' />
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn>추가하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalDim>
  );
};

export default FolderAddModal;
