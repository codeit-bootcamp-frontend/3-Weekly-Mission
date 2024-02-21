import React, {useContext} from "react";
import {createPortal} from "react-dom";
import {ModalStateContext} from "../../context/ModalProvider";
import AddFolderModal from "../components/Modal/AddFolderModal";
import AddLinkModal from "../components/Modal/AddLinkModal";
import ShareModal from "../components/Modal/ShareModal";
import DeleteFolderModal from "../components/Modal/DeleteFolderModal";
import DeleteLinkModal from "../components/Modal/DeleteLinkModal";

const MODAL_COMPONENTS = {
  AddFolder: AddFolderModal,
  AddLink: AddLinkModal,
  Share: ShareModal,
  DeleteFolder: DeleteFolderModal,
  DeleteLink: DeleteLinkModal
};

export default function ModalContainer() {
  const {type, props} = useContext(ModalStateContext);
  console.log(type, props)

  if (!type) {
    return null;
  }
  const modal = MODAL_COMPONENTS[type];

  return modal(props);
}

