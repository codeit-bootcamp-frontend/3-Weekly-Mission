import React from "react";
import { useRef } from "react";
import AddModal from "./DetailModal/AddModal";
import DeleteFolder from "./DetailModal/DeleteFolder";
import DeleteLink from "./DetailModal/DeleteLink";
import EditModal from "./DetailModal/EditModal";
import ShareModal from "./DetailModal/ShareModal";

const CommonModal = ({
  openModal,
  selectModal,
  folderId,
  inputLink,
  setInputLink,
}) => {
  const modalBackground = useRef();

  const closeModal = () => {
    openModal(false, "");
  };

  const useModal = () => {
    switch (selectModal) {
      case "AddModal":
        return <AddModal inputLink={inputLink} setInputLink={setInputLink} />;
      case "DeleteFolder":
        return <DeleteFolder />;
      case "DeleteLink":
        return <DeleteLink />;
      case "EditModal":
        return <EditModal />;
      case "ShareModal":
        return <ShareModal folderId={folderId} />;
      default:
        return <EditModal />;
    }
  };

  return (
    <div
      className="common"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          closeModal();
        }
      }}
    >
      <div className="common-container">
        {useModal(selectModal)}
        <button
          onClick={() => {
            closeModal();
          }}
        >
          <img
            className="common-container-image"
            src="../../images/close.svg"
            alt="닫는 아이콘 이미지"
          />
        </button>
      </div>
    </div>
  );
};

export default CommonModal;
