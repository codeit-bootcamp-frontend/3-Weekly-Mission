import { createPortal } from "react-dom";
import SelectFolderBox from "./SelectFolderBox";
import ShareIconBox from "./ShareIconBox";
import styles from "./Modal.module.css";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Folder } from "@/@types/api/interface";

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  subTitle?: string;
  isShare?: boolean;
  isInput?: boolean;
  isAddLink?: boolean;
  btnText?: string;
  btnColor?: string;
  folderData?: Folder[] | null;
}

function Modal({
  setModal,
  title,
  subTitle,
  isShare,
  isInput,
  isAddLink,
  btnText,
  btnColor,
  folderData,
}: Props) {
  const folderId = 1;

  return (
    <>
      {createPortal(
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <span className={styles.closeBtn}>
              <Image
                fill
                src="/svgs/close-icon.svg"
                alt="close"
                onClick={() => setModal(false)}
              />
            </span>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
            {isInput && (
              <input className={styles.input} placeholder="내용 입력" />
            )}
            {isAddLink && <SelectFolderBox folderData={folderData} />}
            {/*folderData에서 해당 folderId만 뽑아서 보내야됨..*/}
            {isShare ? (
              /*수정해야됨*/
              <ShareIconBox folderId={folderId} />
            ) : (
              <button
                className={
                  btnColor === "red" ? styles.deleteBtn : styles.submitBtn
                }
              >
                {btnText}
              </button>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
