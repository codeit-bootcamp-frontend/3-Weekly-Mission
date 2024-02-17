import { MouseEvent, useState } from "react";
import FolderButton from "./FolderButton";
// import CardList from "../CardList/CardList";
import { ALL_LINKS_ID, ALL_LINKS_NAME } from "./constants";

import styles from "./FolderList.module.css";
import FloatingButton from "../FloatingButton/FloatingButton";

interface Props {
  folderData: any[];
  onClick: any;
  selectedFolderInfo: string[];
}

function FolderList({ folderData, onClick, selectedFolderInfo }: Props) {
  return (
    <>
      <div className={styles.folderListBar}>
        <div className={styles.folderButtons}>
          <FolderButton
            key={ALL_LINKS_ID}
            name={ALL_LINKS_NAME}
            onClick={() => onClick([ALL_LINKS_ID, ALL_LINKS_NAME])}
            isSelected={ALL_LINKS_ID === selectedFolderInfo[0]}
          >
            전체
          </FolderButton>
          {folderData &&
            folderData.map((item) => (
              <FolderButton
                key={item.id}
                name={item.name}
                onClick={() => onClick([item.id, item.name])}
                isSelected={item.id === selectedFolderInfo[0]}
              />
            ))}
        </div>
        <FloatingButton />
      </div>
    </>
  );
}

export default FolderList;
