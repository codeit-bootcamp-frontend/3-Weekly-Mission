import Image from "next/image";
import styles from "./style.module.css";
import FolderUtilsButtons from "@/components/FolderUtilsButtons";

export default function FolderFilterKeyword({
  keywords,
  selectedKeyword,
  handleAllKeywordsClick,
  handleKeywordsClick,
}) {
  const { name: selectedName } = selectedKeyword;

  return (
    <section className={styles["filter-section"]}>
      <div className={`${styles["filter-container"]} container`}>
        <ul className={styles["filter-keywords-list"]}>
          <li
            className={`${styles.keyword} ${
              selectedKeyword === "전체" ? `${styles.selected}` : ""
            }`}
            onClick={handleAllKeywordsClick}
          >
            전체
          </li>
          {keywords.data &&
            keywords.data.map((keyword) => (
              <li
                className={`${styles.keyword} ${
                  selectedName === keyword.name ? `${styles.selected}` : ""
                }`}
                key={keyword.id}
                onClick={() => handleKeywordsClick(keyword)}
              >
                {keyword.name}
              </li>
            ))}
        </ul>
        <div className={styles["folder-add"]}>
          <Image
            width={16}
            height={16}
            src="/assets/add.svg"
            alt="Add"
            className={styles["mobile-blind"]}
          />
          <div
            className={`${styles["folder-add-floating"]} ${styles["pc-blind"]} ${styles["tablet-blind"]}`}
          >
            <span>폴더 추가</span>{" "}
            <Image width={16} height={16} src="/assets/add.svg" alt="" />
          </div>
        </div>
      </div>

      <FolderUtilsButtons selectedKeyword={selectedKeyword} />
    </section>
  );
}
