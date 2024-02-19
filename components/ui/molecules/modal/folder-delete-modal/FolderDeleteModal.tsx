import Modal from '..';

type TFOlderDeleteModalProps = {
  modalName?: string;
  folderName?: string;
  closeModal?: () => void;
};
/**
 * @description '폴더 삭제' 혹은 '링크 삭제'용 모달
 * 스타일 동일
 * todo: prop 받는 거 linkUrl 혹은 folderName으로 할 거.
 */
const FolderDeleteModal = ({ modalName = '폴더 삭제', folderName = '', closeModal }: TFOlderDeleteModalProps) => {
  return (
    <Modal.StModalDim>
      <Modal.StModalWrapper $rowGap={2.4}>
        <Modal.StModalLabel as='div' $rowGap={0.8}>
          {modalName}
          <Modal.StModalSubText>{folderName}</Modal.StModalSubText>
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn $originalColor='red'>삭제하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalDim>
  );
};

export default FolderDeleteModal;
