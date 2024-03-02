import styles from "./FolderBody.module.css";
import SearchBar from "./SearchBar";
import CardList from "../UI/Card/CardList";
import FetchFolderData from "@/api/FetchFolderData";

function FolderBody() {
  const folderdata = FetchFolderData();
  return (
    <div className={styles.body}>
      <SearchBar />
      {folderdata ? (
        <CardList />
      ) : (
        <div className={styles.no_links}>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default FolderBody;
