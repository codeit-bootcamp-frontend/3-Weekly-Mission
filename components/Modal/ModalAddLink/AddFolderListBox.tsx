import { modalCheckedIcon } from "@/public/img";
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  count: string | number;
  folderChecked: string;
  onClick: (name: string) => void;
}

export default function AddFolderListBox({
  name,
  count,
  folderChecked,
  onClick,
}: Props) {
  const checked: boolean = name === folderChecked;
  const handleClick = () => {
    onClick(name);
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Name>{name}</Name> <Count>{count}개 링크</Count>
        {checked && <Image src={modalCheckedIcon} alt={name + "체크됨"} />}
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

const Image = styled.img`
  margin-left: auto;
`;
