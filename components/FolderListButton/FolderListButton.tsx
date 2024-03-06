import React from "react";
import { getFolderData, getLinkList } from "../../apis/api";
import { ApiFunc } from "../../types/functionType";
import { FolderData, FolderNameType } from "./../../types/dataTypes";
import styled from "styled-components";
import { ModalButtonClickType } from "../../types/types";
import Image from "next/image";
import { plusIcon } from "@/public/img";
import { useRouter } from "next/router";

interface Props {
  handleModalButtonClick: ModalButtonClickType;
  itemList?: FolderData[];
  setFolderName: React.Dispatch<React.SetStateAction<FolderNameType>>;
  setCardListItem: (callback?: ApiFunc) => void;
  folderName: FolderNameType;
  userId?: string;
}

export default function FolderListButton({
  handleModalButtonClick,
  itemList,
  setFolderName,
  setCardListItem,
  folderName,
  userId,
}: Props) {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { target } = event;
    if (target instanceof HTMLButtonElement) {
      const nextFolderName = { name: target.name, id: target.id };
      setFolderName(nextFolderName);
      setCardListItem(() => getFolderData(target.id, userId));
      router.push(`/folder`, `/folder/${target.id}`);
    }
  };

  const handleEntireClick = () => {
    setFolderName({ name: "전체", id: "전체" });
    setCardListItem(() => getLinkList(userId));
    router.push("/folder");
  };

  return (
    <Container>
      <Button
        $same={folderName.name === "전체"}
        type="button"
        onClick={handleEntireClick}
        as="button"
      >
        전체
      </Button>
      {itemList?.map((item) => {
        return (
          <Button
            $same={folderName.id === String(item.id)}
            type="button"
            name={item.name}
            id={String(item.id)}
            onClick={handleClick}
            key={item.id}
            as="button"
          >
            {item.name}
          </Button>
        );
      })}
      <AddButton id="addFolder" type="button" onClick={handleModalButtonClick}>
        <Image src={plusIcon} alt="더하기 아이콘" />
      </AddButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

interface ButtonProps {
  $same: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 12px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  ${(props) =>
    props.$same
      ? `background: #6d6afe;
            color: #fff;`
      : ""}
  &:hover {
    background: #6d6afe;
    color: #fff;
  }
  @media screen and (max-width: 756px) {
    padding: 6px 10px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const AddButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;

  @media screen and (max-width: 756px) {
    display: none;
  }
`;
