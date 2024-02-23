import styles from "./Body.module.css";
import SearchBar from "./SearchBar";
import CardList from "../UI/Card/CardList";
import FetchFolderData from "@/get-data/FetchFolderData";

function Body() {
  const folderdata = FetchFolderData();
  return (
    <div className={styles.body}>
      <SearchBar />
      {folderdata === null ? (
        <CardList />
      ) : (
        <div className={styles["no-links"]}>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default Body;
