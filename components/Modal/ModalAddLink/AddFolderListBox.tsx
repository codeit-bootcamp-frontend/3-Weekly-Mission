import { modalCheckedIcon } from "@/public/img";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  count: string | number;
  folderChecked: string;
  onClick: (id: string) => void;
  id: string;
}

export default function AddFolderListBox({
  name,
  count,
  folderChecked,
  onClick,
  id,
}: Props) {
  const checked: boolean = id === folderChecked;
  const handleClick = () => {
    onClick(id);
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Name>{name}</Name> <Count>{count}개 링크</Count>
        {checked && <Img src={modalCheckedIcon} alt={name + "체크됨"} />}
      </Box>
    </>
  );
}

const Box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 264px;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #373740;
`;

const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #9fa6b2;
`;

const Img = styled(Image)`
  margin-left: auto;
`;
