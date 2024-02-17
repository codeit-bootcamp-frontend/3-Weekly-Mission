import React, { useState } from "react";
import { FolderAtionBtn } from "./FolderActionBtn";
import useUserFolderListData from "../../hook/useUserFolderListData";
import styles from "./FolderList.module.css";
import Card from "../CardSection/Card";
import ModalMessge from "../modal/ModalMessage";

export default function FolderListBtn() {
  const { folderLists } = useUserFolderListData();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlechangModal = () => {
    setModalOpen(true);
  };

  const handleFolderClick = (folderId: number | null) => {
    setSelectedFolderId(folderId);
  };

  return (
    <div className={styles.folder_list_box}>
      <div className={styles.folder_list_btn_box}>
        <div>
          <button
            className={styles.folder_list_btn}
            onClick={() => handleFolderClick(null)}
          >
            전체
          </button>
          {folderLists.map((folderList) => (
            <button
              key={folderList.id}
              className={`${styles.folder_list_btn} ${
                selectedFolderId === folderList.id ? "selected" : ""
              }`} // 선택된 폴더의 스타일 변경
              onClick={() => handleFolderClick(folderList.id)} // 클릭시 폴더 아이디를 받아서 폴더 아이디를 변경
            >
              {folderList.name}
            </button>
          ))}
        </div>
        <img
          src="/image/add.svg"
          alt="추가 버튼"
          className={styles.add_btn}
          onClick={handlechangModal}
        />
        <ModalMessge
          modalOpen={modalOpen}
          close={setModalOpen}
          headerText={"폴더 추가"}
          placeholder={"내용 입력"}
          buttonText={"추가하기"}
          type={"blue"}
        />
      </div>
      <FolderAtionBtn />
      {selectedFolderId !== null ? ( // selectedFolderId가 null이 아닐 때
        <div className={styles.folder_card_img}>
          <Card
            selectedFolderId={selectedFolderId} // 선택된 폴더 아이디를 받아서 Card 컴포넌트에 전달
          />
        </div>
      ) : (
        <div className={styles.folder_card_img}>
          <Card />
        </div>
      )}
    </div>
  );
}
