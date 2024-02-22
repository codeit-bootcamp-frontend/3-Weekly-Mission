import styles from "./SearchBar.module.css";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../Content/Content";
import { useState } from "react";
import Image from "next/image";

function SearchBar() {
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value.toLowerCase());
    setInputValue(value);
  };

  const handleClickResetButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setKeyword("");
    setInputValue("");
  };

  return (
    <div className={styles.searchBar}>
      <span className={styles.searchBox}>
        <span className={styles.searchIcon}>
          <Image fill src="/svgs/search-icon.svg" alt="search" />
        </span>

        <input
          className={styles.inputText}
          type="text"
          id="search"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </span>

      {keyword?.length > 0 && (
        <button className={styles.resetIcon} onClick={handleClickResetButton} />
      )}
    </div>
  );
}

export default SearchBar;
