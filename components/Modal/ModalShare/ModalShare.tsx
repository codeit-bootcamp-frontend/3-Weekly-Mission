import React from "react";
import styled from "styled-components";
import {
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "../Modal.styled";
import ModalShareLinkIcon from "./ModalShareLinkIcon";
import { CopyClipBoard } from "@/utils/util";
import { shareKakao } from "@/utils/kakaoShare";
import { shareFacebook } from "@/utils/facebookShare";
import { FolderData } from "@/types/dataTypes";
import { kakaoIcon, modalFacebookIcon, modalShareIcon } from "@/public/img";

interface Props {
  folderName: string;
  itemList?: FolderData[];
  userId?: string;
}

export default function ModalShare({
  folderName = "",
  itemList,
  userId,
}: Props) {
  const currentFolder = itemList?.find((item) => item.name === folderName);
  const url =
    window.location.origin +
    `/shared?user=${userId}&folder=${currentFolder?.id}`;
  const handleLinkCopy = () => {
    CopyClipBoard(url);
  };
  const handleShareToFacebook = () => {
    shareFacebook(url);
  };
  const handleShareToKakao = () => {
    shareKakao(url, folderName);
  };

  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>폴더 공유</ModalTitle>
        <ModalFolderTitle>{folderName}</ModalFolderTitle>
      </ModalTitleContainer>
      <ModalShareLinkContainer>
        <ModalShareLinkBox onClick={handleShareToKakao}>
          <ModalShareLinkIcon
            type={"kakao"}
            imageSource={kakaoIcon}
            altContent={"카카오이미지"}
          />
          카카오톡
        </ModalShareLinkBox>
        <ModalShareLinkBox onClick={handleShareToFacebook}>
          <ModalShareLinkIcon
            type={"facebook"}
            imageSource={modalFacebookIcon}
            altContent={"페이스북이미지"}
          />
          페이스북
        </ModalShareLinkBox>
        <ModalShareLinkBox onClick={handleLinkCopy}>
          <ModalShareLinkIcon
            type={"link"}
            imageSource={modalShareIcon}
            altContent={"링크 복사"}
          />
          링크복사
        </ModalShareLinkBox>
      </ModalShareLinkContainer>
    </ModalWrapper>
  );
}

const ModalShareLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 400;
  font-family: Inter;
  color: #373740;
`;

const ModalShareLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 32px;
`;
