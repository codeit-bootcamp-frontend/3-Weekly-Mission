import * as S from './Modal.style';
import closeIcon from '../../../assets/icons/close-icon.svg';
import ModalPortal from "../ModalPortal";
import {useEffect, useRef} from "react";
import {SubHeader} from "./Modal.style";
import useModal from "../../../hooks/useModal";

export default function Modal({modalHeader, subHeader, modalType, children}) {
  const {closeModal} = useModal();
  const modalRef = useRef(null);

  const handleModalClose = () => {
    closeModal();
  }

  useEffect(() => {
    handleModalClose()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
      <ModalPortal>
            <S.Background>
              <S.ModalContent ref={modalRef}>
                <S.Header>
                  {modalHeader}
                  {subHeader && <SubHeader>{subHeader}</SubHeader>}
                </S.Header>
                {children}
                <S.CloseButton onClick={handleModalClose}>
                  <img src={closeIcon} alt="close-icon"/>
                </S.CloseButton>
              </S.ModalContent>
            </S.Background>
      </ModalPortal>
  );
}
