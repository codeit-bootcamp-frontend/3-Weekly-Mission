import React from "react";
import imageData from "@/public/imageData";
import styled from "styled-components";

export default function FloatingActionButton() {
  return (
    <Button type="button">
      <Span>폴더추가</Span>
      <Img src={imageData.folderPulsIcon} alt="폴더추가하기 아이콘" />
    </Button>
  );
}

const Button = styled.button`
  display: none;

  @media screen and (max-width: 1124px) {
    display: none;
  }
  @media screen and (max-width: 756px) {
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;
    color: #e7effb;
    gap: 4px;
  }
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
`;
