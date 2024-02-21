import Modal from '..';
import { StModalSubText } from '../StModalSubText';

type TLinkDeleteModalProps = {
  modalName?: string;
  linkUrl?: string;
  closeModal?: () => void;
};

const LinkDeleteModal = ({ modalName = '링크 삭제', linkUrl, closeModal }: TLinkDeleteModalProps) => {
  return (
    <Modal.StModalDim>
      <Modal.StModalWrapper $rowGap={2.4}>
        <Modal.StModalLabel as='div' $rowGap={0.8}>
          {modalName}
          <StModalSubText>{linkUrl}</StModalSubText>
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn $originalColor='red'>삭제하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalDim>
  );
};

export default LinkDeleteModal;
