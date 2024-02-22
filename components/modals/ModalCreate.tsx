import ReactDom from "react-dom";
import { ModalProps } from "@/types/types";
import { ModalBackground, ModalContainer } from "./ModalBackground";

export default function ModalCreate({ children, onClick }: ModalProps) {
  const divModal = document.getElementById("modal-root") as HTMLDivElement;
  if (!divModal) return;
  return ReactDom.createPortal(
    <>
      <ModalContainer>{children}</ModalContainer>
      <ModalBackground onClick={onClick} />
    </>,
    divModal
  );
}
