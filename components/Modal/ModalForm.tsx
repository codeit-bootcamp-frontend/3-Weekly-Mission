import React from "react";
import {
  ModalCtaButton,
  ModalInput,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";
import CtaButton from "../CtaButton/CtaButton";

interface Props {
  title: string;
  defaultPlace: string;
  buttonContent: string;
}

export default function ModalForm({
  title,
  defaultPlace,
  buttonContent,
}: Props) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <ModalInput placeholder={defaultPlace} />
      <CtaButton CTAButtonStyle={ModalCtaButton}>{buttonContent}</CtaButton>
    </ModalWrapper>
  );
}
