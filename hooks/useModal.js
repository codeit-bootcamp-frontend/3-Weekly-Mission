import {useContext} from "react";
import {ModalSetterContext} from "../contexts/ModalProvider";

export default function useModal() {
  const setModalState = useContext(ModalSetterContext);

  const openModal = ({type, props = null}) => {
    setModalState({type, props});
  };

  const closeModal = () => {
    setModalState({type: null, props: null});
  };

  return {openModal, closeModal};
}

