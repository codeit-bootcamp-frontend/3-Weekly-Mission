import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import classNames from "classnames";

export default function SearchBar({ className, onSearch }: any) {
  const router = useRouter();
  const { keyword } = router.query;
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleResetClick = (e: MouseEvent) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <>
      <form
        className={classNames(className, styles.form)}
        onSubmit={handleSubmit}
      >
        <Image
          className={styles.searchIcon}
          width="14"
          height="14"
          src="/assets/Search.png"
          alt="검색창 아이콘"
        />
        <input
          name="search"
          value={value}
          placeholder="링크를 검색해 보세요."
          onChange={handleChange}
        />
        {value.length > 0 && <ResetButton onClick={handleResetClick} />}
      </form>
      {keyword && (
        <h2 className={styles.result}>
          <span>{keyword}</span>으로 검색한 결과입니다.
        </h2>
      )}
    </>
  );
}

function ResetButton({ onClick }: any) {
  return (
    <button type="button" className={styles.resetButton} onClick={onClick}>
      <Image src="/assets/close.svg" width="24" height="24" alt="리셋 버튼" />
    </button>
  );
}
