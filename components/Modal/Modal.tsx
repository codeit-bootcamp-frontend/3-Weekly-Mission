import React from "react";
import styled from "styled-components";
import ModalShare from "./ModalShare/ModalShare";
import ModalDelete from "./ModalDelete";
import ModalForm from "./ModalForm";
import ModalAddLink from "./ModalAddLink/ModalAddLink";
import { VoidFunc } from "../../types/functionType";
import { FolderData } from "../../types/dataTypes";
import { NavbarUserInfo } from "../../types/userType";
import Image from "next/image";
import { closeButton } from "@/public/img";
import { ModalFormType } from "@/types/modalTypes";

interface Props {
  folderName?: string;
  modalId: string;
  toggleModalClick?: VoidFunc;
  modalUrl?: string;
  itemList: FolderData[];
  user?: NavbarUserInfo;
}

export default function Modal({
  folderName = "",
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
            src={closeButton}
            alt="모달창 닫기 버튼"
          />
        </ModalCloseButton>
        {getModalContent({ modalId, folderName, modalUrl, itemList, user })}
      </ModalContainer>
    </ModalWrapper>
  );
}

const modalForm: ModalFormType = {
  addFolder: {
    type: "form",
    title: "폴더 추가",
    defaultPlace: "내용 입력",
    buttonContent: "추가하기",
  },
  editFolder: {
    type: "form",
    title: "폴더 이름 변경",
    defaultPlace: "내용 입력",
    buttonContent: "변경하기",
  },
  shareFolder: {
    type: "share",
  },
  deleteFolder: {
    type: "delete",
    nameType: "폴더",
  },
  deleteLink: {
    type: "delete",
    nameType: "링크",
  },
  addLink: {
    type: "add",
  },
};

const getModalContent = ({
  modalId,
  folderName,
  modalUrl,
  itemList,
  user,
}: Props) => {
  const modalInfo = modalForm[modalId];
  if (modalInfo.type === "form") {
    return (
      <ModalForm
        title={modalInfo.title}
        defaultPlace={modalInfo.defaultPlace}
        buttonContent={modalInfo.buttonContent}
      />
    );
  }
  if (modalInfo.type === "share") {
    return (
      <ModalShare
        userId={user?.id}
        folderName={folderName}
        itemList={itemList}
      />
    );
  }

  if (modalInfo.type === "delete") {
    const deleteName = modalId === "deleteFolder" ? folderName : modalUrl;
    return (
      <ModalDelete nameType={modalInfo.nameType} deleteName={deleteName} />
    );
  }

  if (modalInfo.type === "add") {
    return <ModalAddLink itemList={itemList} url={modalUrl} />;
  }
  return;
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
