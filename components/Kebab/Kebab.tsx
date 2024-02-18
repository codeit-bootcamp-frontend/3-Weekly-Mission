import React, { useState } from "react";
import imageData from "@/public/imageData";
import styled from "styled-components";
import { ModalButtonClickType } from "../../types/types";
import Image from "next/image";

interface Props {
  handleModalButtonClick: ModalButtonClickType | null;
  url: string;
}

export default function Kebab({ handleModalButtonClick, url }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleKebabClick = () => {
    toggleClicked();
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!handleModalButtonClick) {
      return;
    }
    const { currentTarget } = event;
    const temp = {
      currentTarget,
      url,
    } as React.MouseEvent<HTMLButtonElement> & { url: string };
    handleModalButtonClick(temp);
  };

  return (
    <Wrapper>
      <ContainerBtn type="button" onClick={handleKebabClick}>
        <Image
          width={21}
          height={17}
          src={imageData.kebabIcon}
          alt="케밥모양 아이콘"
        />
      </ContainerBtn>
      {isClicked && (
        <ToggleContainer>
          <Button type="button" id="deleteLink" onClick={handleButtonClick}>
            삭제하기
          </Button>
          <Button type="button" id="addLink" onClick={handleButtonClick}>
            폴더에 추가
          </Button>
        </ToggleContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const ContainerBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;

const ToggleContainer = styled.div`
  position: absolute;
  right: -20px;
  width: 100px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  padding: 7px 12px;
  background: #fff;
  color: #000;
  border: none;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;
