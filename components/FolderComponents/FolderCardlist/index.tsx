import getAllFolderLinks from "@/api/getAllFolderLinks";
import getFolderLinks from "@/api/getFolderLinks";
import isMatchSearchKeyword from "@/utils/isMatchSearchKeyword";
import FolderCard from "@/components/FolderComponents/FolderCard";
import styles from "@/styles/cardlist.module.css";
import { useEffect, useState } from "react";

interface FolderCardlistProps {
  links: FolderLinksData[];
  searchKeyword: string;
  selectedKeyword: FolderFilterKeywordData | string;
}

function FolderCardlist({
  links,
  searchKeyword,
  selectedKeyword,
}: FolderCardlistProps) {
  const [folderKeyword, setFolderKeyword] = useState([]);
  const { id: selectedId } = selectedKeyword;

  const loadAllFolderDate = async () => {
    try {
      const folderAllLinks = await getAllFolderLinks();
      setFolderKeyword(folderAllLinks.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFolderDate = async () => {
    try {
      const folderLinks = await getFolderLinks(selectedId);
      setFolderKeyword(folderLinks || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    selectedKeyword === "전체" ? loadAllFolderDate() : loadFolderDate();
  }, [selectedId]);

  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {folderKeyword.length ? (
          links.map(
            (link: FolderLinksData) =>
              isMatchSearchKeyword(link, searchKeyword) && (
                <FolderCard link={link} key={link.id} />
              )
          )
        ) : (
          <li className={styles["empty-links"]}>저장된 링크가 없습니다.</li>
        )}
      </ul>
    </section>
  );
}

export default FolderCardlist;
