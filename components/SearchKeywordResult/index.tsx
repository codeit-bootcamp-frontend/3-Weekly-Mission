import styles from "./style.module.css";

interface SearchKeywordProps {
  searchKeyword: string;
}

function SearchKeywordResult({ searchKeyword }: SearchKeywordProps) {
  return (
    <div className="container">
      <h3 className={styles["search-keyword"]}>
        <span>{searchKeyword}</span>으로 검색한 결과입니다.
      </h3>
    </div>
  );
}

export default SearchKeywordResult;
