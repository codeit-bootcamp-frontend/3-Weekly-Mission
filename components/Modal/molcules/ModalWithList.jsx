import Modal from "./Modal";
import * as S from './InputModal.style';
import {useState} from "react";
import ModalButton from "../atoms/ModalButton";
import ModalList from "../atoms/ModalList";

export default function ModalWithList({
  header,
  subHeader,
  modalList,
  buttonName,
  buttonType = "default",
  buttonAction,
}) {


  return (
      <Modal modalHeader={header} subHeader={subHeader}>
        <ModalList modalList = {modalList}/>
        <ModalButton buttonName={buttonName} buttonAction={buttonAction}
                     buttonType={buttonType}/>
      </Modal>
  );
}
