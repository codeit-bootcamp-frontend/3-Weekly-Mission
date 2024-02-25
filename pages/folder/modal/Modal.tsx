import { createContext, useContext, useRef } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import AddLink from "./modalType/addLink/AddLink";
import AddFolder from "./modalType/addFolder/AddFolder";
import ShareFolder from "./modalType/shareFolder.tsx/ShareFolder";
import EditFolder from "./modalType/editFolder/EditFolder";
import DeleteFolder from "./modalType/deleteFolder/DeleteFolder";
import DeleteLinkModal from "./modalType/deleteLink/DeleteLink";

export enum ModalType {
  ADD_FOLDER = "addFolder",
  SHARE_FOLDER = "shareFolder",
  EDIT_FOLDER = "editFolder",
  DELETE_FOLDER = "deleteFolder",
  ADD_LINK = "addLink",
  DELETE_LINK = "deleteLink",
}

type ModalContextType = {
  handleClose: () => void;
};

const initContext: ModalContextType = {
  handleClose: () => {},
};

const ModalContext = createContext(initContext);

export default function Modal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { type } = router.query;

  const handleClose = () => {
    router.back();
  };

  // useRef를 이용해 모달창 바깥을 누르면 모달창 꺼지도록 함
  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ handleClose }}>
      <div className={styles.bg} onClick={handleClickOutside}>
        <div className={styles.window} ref={modalRef}>
          {modalSelect(type as string)}
        </div>
      </div>
    </ModalContext.Provider>,

    document.getElementById("modal-root") as HTMLElement
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}

const modalSelect = (type: string) => {
  switch (type) {
    case ModalType.ADD_FOLDER:
      return <AddFolder />;
    case ModalType.SHARE_FOLDER:
      return <ShareFolder />;
    case ModalType.EDIT_FOLDER:
      return <EditFolder />;
    case ModalType.DELETE_FOLDER:
      return <DeleteFolder />;
    case ModalType.ADD_LINK:
      return <AddLink />;
    case ModalType.DELETE_LINK:
      return <DeleteLinkModal />;
  }
};
