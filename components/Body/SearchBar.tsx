import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input
        className={styles.search}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}

export default SearchBar;
