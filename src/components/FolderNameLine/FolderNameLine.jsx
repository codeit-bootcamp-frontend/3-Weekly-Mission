import React from "react";
import styled from "./FolderNameLine.module.css";
import imageData from "../../utils/imageData";

export default function FolderNameLine({ folderName }) {
  return (
    <div className={styled.folderNameLine}>
      <h2 className={styled.folder_name}>{folderName}</h2>
      {folderName !== "전체" && (
        <div className={styled["icon-container"]}>
          <img src={imageData.shareIcon} alt="공유아이콘" />
          <span>공유</span>
          <img src={imageData.penIcon} alt="이름 변경아이콘" />
          <span>이름 변경</span>
          <img src={imageData.deleteIcon} alt="삭제아이콘" />
          <span>삭제</span>
        </div>
      )}
    </div>
  );
}
