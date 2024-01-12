import React, { useState } from "react";
import imageData from "../../utils/imageData";
import styled from "./Kebab.module.css";

export default function Kebab({ ModalButtonClick, url }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  const handleKebabClick = () => {
    toggleClicked();
  };

  const handleButtonClick = ({ currentTarget }) => {
    ModalButtonClick({ currentTarget, url });
  };

  return (
    <div className={styled.container} onClick={handleKebabClick}>
      <img
        className={styled.Kebab}
        src={imageData.kebabIcon}
        alt="케밥모양 아이콘"
      />
      {isClicked && (
        <div className={styled["hover-container"]}>
          <button
            id="deleteLink"
            onClick={handleButtonClick}
            className={styled.button}
          >
            삭제하기
          </button>
          <button
            id="addLink"
            onClick={handleButtonClick}
            className={styled.button}
          >
            폴더에 추가
          </button>
        </div>
      )}
    </div>
  );
}
