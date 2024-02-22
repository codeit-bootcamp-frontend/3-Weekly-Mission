import React from "react";
import styled from "styled-components";
import imageData from "@/public/imageData";
import ModalShare from "./ModalShare/ModalShare";
import ModalDelete from "./ModalDelete";
import ModalForm from "./ModalForm";
import ModalAddLink from "./ModalAddLink/ModalAddLink";
import { VoidFunc } from "../../types/functionType";
import { FolderData } from "../../types/dataTypes";
import { NavbarUserInfo } from "../../types/userType";
import Image from "next/image";

interface Props {
  folderName: string;
  modalId: string;
  toggleModalClick?: VoidFunc;
  modalUrl: string | null;
  itemList: FolderData[];
  user?: NavbarUserInfo;
}

export default function Modal({
  folderName,
  modalId,
  toggleModalClick,
  modalUrl,
  itemList,
  user,
}: Props) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCloseButton type="button" onClick={toggleModalClick}>
          <Image
            width={24}
            height={24}
            src={imageData.closeButton.src}
            alt="모달창 닫기 버튼"
          />
        </ModalCloseButton>
        {getModalContent({ modalId, folderName, modalUrl, itemList, user })}
      </ModalContainer>
    </ModalWrapper>
  );
}

const getModalContent = ({
  modalId,
  folderName,
  modalUrl,
  itemList,
  user,
}: Props) => {
  switch (modalId) {
    case "addFolder":
      return (
        <ModalForm
          title={"폴더 추가"}
          defaultPlace={"내용 입력"}
          buttonContent={"추가하기"}
        />
      );
    case "editFolder":
      return (
        <ModalForm
          title={"폴더 이름 변경"}
          defaultPlace={folderName}
          buttonContent={"변경하기"}
        />
      );
    case "shareFolder":
      return (
        <ModalShare
          userId={user?.id}
          folderName={folderName}
          itemList={itemList}
        />
      );
    case "deleteFolder":
      return <ModalDelete nameType={"폴더"} deleteName={folderName} />;
    case "deleteLink":
      return <ModalDelete nameType={"링크"} deleteName={modalUrl} />;
    case "addLink":
      return <ModalAddLink itemList={itemList} url={modalUrl} />;

    default:
      return;
  }
};

const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 8;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ModalContainer = styled.div`
  position: relative;
  display: inline-flex;
  padding: 32px 40px;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;
