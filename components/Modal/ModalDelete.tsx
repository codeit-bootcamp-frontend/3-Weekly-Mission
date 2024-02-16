import React from "react";
import {
  ModalNegativeButton,
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

interface Props {
  nameType: string;
  deleteName: string | null;
}

export default function ModalDelete({ nameType, deleteName }: Props) {
  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>{nameType} 삭제</ModalTitle>
        <ModalFolderTitle>{deleteName}</ModalFolderTitle>
      </ModalTitleContainer>
      <ModalNegativeButton>삭제하기</ModalNegativeButton>
    </ModalWrapper>
  );
}
