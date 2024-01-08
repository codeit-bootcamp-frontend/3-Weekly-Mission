import { getFoldersSample } from "../../api/api";
import { useEffect, useState } from "react";
import searchBarStyles from "../../components/searchBar/SearchBar.module.css";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import searchIcon from "../../assets/Search.png";
import styles from "./SharedPage.module.css";

function SharedPage() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { folder } = await getFoldersSample();

        if (!folder) return;
        setFolder(folder);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ListPage folderInfo={folder} isFavorite={true}>
        <form className={searchBarStyles.form}>
          <input name="search" placeholder="링크를 검색해 보세요."></input>
          <img
            className={searchBarStyles.searchIcon}
            src={searchIcon}
            alt="검색창 아이콘"
          />
        </form>
        <div className={styles.linkList}>
          {folder &&
            folder.links.map((linkInfo) => (
              <LinkItem
                key={linkInfo.id}
                linkInfo={linkInfo}
                isShared={true}
              ></LinkItem>
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default SharedPage;
