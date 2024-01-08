import React, { useState } from "react";
import imageData from "../../utils/imageData";
import styled from "./Kebab.module.css";

export default function Kebab() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={styled.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={styled.Kebab}
        src={imageData.kebabIcon}
        alt="케밥모양 아이콘"
      />
      {isHovered && (
        <div className={styled["hover-container"]}>
          <button className={styled.button}>삭제하기</button>
          <button className={styled.button}>폴더에 추가</button>
        </div>
      )}
    </div>
  );
}
