import Modal from '..';

type TFolderEditModal = {
  modalName?: string;
  folderName?: string;
  closeModal?: () => void;
};
/**
 * @description 폴더 이름 변경 모달
 * todo: 폴더명 state 받아서 변경
 */
const FolderEditModal = ({ modalName = '폴더 이름 변경', folderName = '', closeModal }: TFolderEditModal) => {
  return (
    <Modal.StModalDim>
      <Modal.StModalWrapper $rowGap={1.5}>
        <Modal.StModalLabel htmlFor='folder-name-change' $rowGap={2.4}>
          {/* 접근성 - 시각 장애인 분들 위함 ---> input은 무조건 라벨 태그 안에 있어야 한다고 권장함. - W3C */}
          {modalName}
          <Modal.StModalInput placeholder={folderName} id='folder-name-change' />
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn>변경하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalDim>
  );
};

export default FolderEditModal;
