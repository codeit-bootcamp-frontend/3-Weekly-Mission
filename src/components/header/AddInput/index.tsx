import LINKIMAGE from "assets/link.svg";
import { useState, useRef } from "react";
import React from "react";
import PopupMessage from "components/modal";
import AddFolderModal from "components/modal/addFolderModal";

export default function AddInput() {
  const [modalOpen, setModalOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputNode = inputRef.current;
  // 오류가 나서 범위를 좁혀줬다. 
  const handlePopupMessage = () => {
    if(inputNode !== null) {
      inputNode.value && setModalOpen(true);
    }
  };
  const isClose = (value: boolean) => {
    setModalOpen(value);
  };

  return (
    <div className="AddInput">
      <div className="AddInput-input">
        <div className="AddInput-fnc">
          <img src={LINKIMAGE} alt="" />
          <input
            type="text"
            placeholder="링크를 추가해 보세요"
            ref={inputRef}
          />
          <button onClick={handlePopupMessage}>
            <span className="text">추가하기</span>
          </button>
          <PopupMessage
            modalOpen={modalOpen}
            onClick={isClose}
            component={<AddFolderModal isSubtext={false} />}
          />
        </div>
      </div>
    </div>
  );
}
