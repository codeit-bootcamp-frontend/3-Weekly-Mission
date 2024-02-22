import { ChangeEvent, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";

type SearchbarProps = {
  handleSearchKeywordChange: (changeSearchKeyword: string) => void;
};

function Searchbar({ handleSearchKeywordChange }: SearchbarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchKeywordChange(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  const handleInputValueClear = () => {
    handleSearchKeywordChange("");
    setInputValue("");
  };

  return (
    <section className={styles["searchbar-section"]}>
      <div className="container">
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          className={`${styles["search-input"]} ${inputValue && styles.crrent}`}
          value={inputValue}
          onChange={handleInputOnChange}
        />
        {inputValue && (
          <Image
            src="/assets/searchclear.svg"
            alt="검색창 비우는 버튼"
            onClick={handleInputValueClear}
            width={24}
            height={24}
          />
        )}
      </div>
    </section>
  );
}

export default Searchbar;
