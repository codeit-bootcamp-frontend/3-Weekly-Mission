import React from "react";
import imageData from "../../utils/imageData";
import styled from "./FloatingActionButton.module.css";

export default function FloatingActionButton() {
  return (
    <button className={styled.floating}>
      <span>폴더추가</span>
      <img src={imageData.folderPulsIcon} alt="폴더추가하기 아이콘" />
    </button>
  );
}
