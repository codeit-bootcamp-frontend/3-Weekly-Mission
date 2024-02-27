import React, { useState } from "react";
import FolderAtionBtn from "./FolderActionBtn";
import useUserFolderListData from "../../../hook/useUserFolderListData";
import styles from "./FolderList.module.css";
import Card from "../CardSection/Card";
import ModalMessge from "../../atomicComponents/modal/ModalMessage";
import Image from "next/image";
import { add_svg } from "@/public/image";

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
                selectedFolderId === folderList.id ? `${styles.selected}` : ""
              }`}
              onClick={() => handleFolderClick(folderList.id)}
            >
              {folderList.name}
            </button>
          ))}
        </div>
        <Image
          src={add_svg}
          alt="추가 버튼"
          className={styles.add_btn}
          onClick={handlechangModal}
          width={15}
          height={15}
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
      <FolderAtionBtn folderLists={folderLists} />
      {selectedFolderId !== null ? (
        <div className={styles.folder_card_img}>
          <Card selectedFolderId={selectedFolderId} />
        </div>
      ) : (
        <div className={styles.folder_card_img}>
          <Card />
        </div>
      )}
    </div>
  );
}
