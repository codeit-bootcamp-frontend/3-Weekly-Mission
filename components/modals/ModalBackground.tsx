import { ModalProps } from "@/types/types";
import * as S from "./ModalBackground.style";

export function ModalBackground({ onClick }: ModalProps) {
  return <S.ModalBackground onClick={onClick}></S.ModalBackground>;
}

export function ModalContainer({ children }: ModalProps) {
  return <S.ModalContainer>{children}</S.ModalContainer>;
}
