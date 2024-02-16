import React from "react";
import imageData from "@/public/imageData";
import styled from "styled-components";
import { ModalButtonClickType } from "../../types/types";
import Image from "next/image";

interface Props {
  handleModalButtonClick: ModalButtonClickType;
  folderName?: string;
}

export default function FolderNameLine({
  handleModalButtonClick,
  folderName,
}: Props) {
  return (
    <FolderNameBox>
      <FolderName>{folderName}</FolderName>
      {folderName !== "전체" && (
        <Container>
          <Button
            type="button"
            id="shareFolder"
            onClick={handleModalButtonClick}
          >
            <Img src={imageData.shareIcon} alt="공유아이콘" />
            <Span>공유</Span>
          </Button>
          <Button
            type="button"
            id="editFolder"
            onClick={handleModalButtonClick}
          >
            <Img src={imageData.penIcon} alt="이름 변경아이콘" />
            <Span>이름 변경</Span>
          </Button>
          <Button
            type="button"
            id="deleteFolder"
            onClick={handleModalButtonClick}
          >
            <Img src={imageData.deleteIcon} alt="삭제아이콘" />
            <Span>삭제</Span>
          </Button>
        </Container>
      )}
    </FolderNameBox>
  );
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const FolderNameBox = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 756px) {
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }
`;

const FolderName = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;

const Img = styled(Image)`
  width: 18px;
  height: 18px;
`;
const Span = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #9fa6b2;
`;
