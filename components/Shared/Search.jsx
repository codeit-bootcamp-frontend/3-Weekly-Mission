/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Shared.module.css";

export default function Search() {
  return (
    <article>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <img src={"/assets/Icons/search.svg"} alt="검색 아이콘 이미지" />
          <input></input>
        </div>
      </div>
    </article>
  );
}
