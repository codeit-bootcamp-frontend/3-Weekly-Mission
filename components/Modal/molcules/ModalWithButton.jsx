import Modal from "./Modal";
import * as S from './InputModal.style';
import {useState} from "react";
import ModalButton from "../atoms/ModalButton";

export default function ModalWithButton({
  header,
  subHeader,
  useInput = false,
  inputDefault = '',
  buttonName,
  buttonType = "default",  // alert,default
  buttonAction,
}) {

  const [inputValue, setInputValue] = useState(inputDefault);

  return (
      <Modal modalHeader={header} subHeader={subHeader}>
        {useInput && <S.Input type='text' value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              placeholder="내용을 입력해주세요"/>}
        <ModalButton buttonName={buttonName} buttonAction={buttonAction}
                     buttonType={buttonType}/>
      </Modal>
  );
}
