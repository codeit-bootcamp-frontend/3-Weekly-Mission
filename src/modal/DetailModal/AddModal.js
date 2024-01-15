import React from "react";

const AddModal = ({ value }) => {
  return (
    <>
      <div className="add-title">
        <div>폴더추가</div>
      </div>
      <input className="add-input" placeholder="내용입력" value={value} />
      <button className="add-button">추가하기</button>
      <div></div>
    </>
  );
};

export default AddModal;
