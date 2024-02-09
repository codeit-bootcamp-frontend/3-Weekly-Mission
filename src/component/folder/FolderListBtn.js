import React, { useState } from "react";
import add_svg from "../../image/add.svg";
import FolderAtionBtn from "./FolderActionBtn";
import useUserFolderListData from "../../Hook/useUserFolderListData";
import "./FolderList.css";
import Card from "../CardSection/Card";

export default function FolderListBtn() {
  const { folderLists } = useUserFolderListData();
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleFolderClick = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <div className="folder_list_box">
      <div className="folder_list_btn_box">
        <div>
        <button
          className="folder_list_btn"
          onClick={() => handleFolderClick(null)}
        >
          전체
        </button>
        {folderLists.map((folderList) => (
          <button
            key={folderList.id}
            className={`folder_list_btn ${
              selectedFolderId === folderList.id ? "selected" : ""
            }`} // 선택된 폴더의 스타일 변경
            onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
          >
            {folderList.name}
          </button>
        ))}
        </div>
        <img src={add_svg} alt="추가 버튼" className="add_btn" />
      </div>
      <FolderAtionBtn />
      {selectedFolderId !== null ? ( // selectedFolderId가 null이 아닐 때
        <div className="folder_card_img">
          <Card
            selectedFolderId={selectedFolderId} // 선택된 폴더 아이디를 받아서 Card 컴포넌트에 전달
          />
        </div>
      ) : (
        <div className="folder_card_img">
          <Card
            selectedFolderId={null} // selectedFolderId가 null일 때 (전체 버튼을 눌렀을 때)
          />
        </div>
      )}
    </div>
  );
}
