import Modal from "react-modal";
import "./ModalMessage.css";
import close_svg from "../../image/close.svg";
import { ModalType, OverlayStyle, ContentStyle } from "../../../types/Types";
import styles from "./ModalMessage.module.css";

export default function SnsShareModal({
  modalOpen,
  headerText,
  folderName,
  onClick,
}: ModalType) {
  const customModalStyle: Record<string, OverlayStyle | ContentStyle> = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100%",
      zIndex: "10",
    },
    content: {
      width: "375px",
      height: "260px",
      padding: "32px 40px",
      zIndex: "11",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      border: "1px solid var(--Linkbrary-gray20, #CCD5E3)",
      backgroundColor: "white",
      position: "relative",
    },
  };
  return (
    <Modal
      isOpen={modalOpen}
      style={customModalStyle}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <span className={styles.modal_title}>
        {headerText}
        <img
          src={close_svg}
          alt="모달창 닫기버튼"
          className={styles.modal_closebtn}
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        />
      </span>
      <span>{folderName}</span>
    </Modal>
  );
}
