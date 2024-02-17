import { useState } from "react";
import { useFolderData } from "../../hooks/useFolderData";
import SearchBar from "../SearchBar/SearchBar";

import FolderList from "../Folder/FolderList";
import { ALL_LINKS_ID } from "../Folder/constants";
import { ALL_LINKS_NAME } from "../Folder/constants";
import styles from "./Content.module.css";
import CardList from "../CardList/CardList";
import { RecoilState, atom, useRecoilState } from "recoil";

export const searchKeyword: RecoilState<string> = atom({
  key: "keyword",
  default: "",
});

function Content() {
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const { folderData } = useFolderData();
  const [folderInfo, setFolderInfo] = useState([ALL_LINKS_ID, ALL_LINKS_NAME]); //수정-id name 하나로 관리할것...

  const [selectedFolderInfo, setSelectedFolderInfo] = useState([...folderInfo]);

  const handleFolderClick = (folderInfo: any) => {
    setSelectedFolderInfo([...folderInfo]);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.spacing}>
        <SearchBar />
        <div className={styles.searchText}>
          <span>{keyword}</span>(으)로 검색한 결과입니다.
        </div>

        <div className={styles.searchContent}>
          {!folderData ? (
            <div className={styles.noLink}>저장된 링크가 없습니다.</div>
          ) : (
            <FolderList
              folderData={folderData}
              onClick={handleFolderClick}
              selectedFolderInfo={selectedFolderInfo}
            />
          )}
          <CardList
            folderData={folderData}
            selectedFolderId={selectedFolderInfo[0]}
            selectedFolderName={selectedFolderInfo[1]}
          ></CardList>
        </div>
      </div>
    </div>
  );
}

export default Content;
