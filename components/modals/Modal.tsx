import useGetFolderList from "../../hooks/useGetFolderList";
import modalCloseIcon from "@/public/modal_close_icon.svg";
import styles from "./Modal.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import ShareModal from "./ShareModal";
import NameChangeModal from "./NameChangeModal";
import AddFolderModal from "./AddFolderModal";
import AddLinkModal from "./AddLinkModal";
import FolderDeleteModal from "./FolderDeleteModal";
import LinkDeleteModal from "./LinkDeleteModal";

export default function Modal({ state, onClick, link }: any) {
  const folderList = useGetFolderList();

  if (typeof window === "undefined") return <></>;

  const cancelModal = (e: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick();
  };

  return createPortal(
    <>
      {state["state"] && (
        <>
          <div className={styles["modal-background"]} onClick={cancelModal} />
          <div className={styles["modal-container"]}>
            <button className={styles["modal-close-btn"]} onClick={cancelModal}>
              <Image
                className={styles["modal-close-icon"]}
                src={modalCloseIcon}
                alt="modal-close-Image"
              />
            </button>
            {(state["target"] === "공유" && <ShareModal state={state} />) ||
              (state["target"] === "이름 변경" && (
                <NameChangeModal state={state} />
              )) ||
              (state["target"] === "삭제" && (
                <FolderDeleteModal state={state} />
              )) ||
              (state["target"] === "폴더추가" && (
                <AddFolderModal state={state} />
              )) ||
              (state["target"] === "삭제하기" && (
                <LinkDeleteModal state={state} />
              )) ||
              ((state["target"] === "폴더에 추가" || "추가하기") && (
                <AddLinkModal state={state} data={folderList} link={link} />
              ))}
          </div>
        </>
      )}
    </>,
    document.body
  );
}
