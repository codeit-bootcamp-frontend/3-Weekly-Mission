import styled from "styled-components";
import { CTAButton } from "../CtaButton/CtaButton";

export const ModalInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  padding: 18px 15px;
  margin-top: 24px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #6d6afe;
  background: #fff;
`;
export const ModalCtaButton = styled(CTAButton)`
  padding: 16px 20px;
  width: 280px;
`;

export const ModalNegativeButton = styled(ModalCtaButton)`
  background: #ff5b56;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
`;

export const ModalTitleContainer = styled(ModalWrapper)`
  width: 280px;
  gap: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ModalFolderTitle = styled.span`
  width: 100%;
  text-align: center;
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 400;
`;
