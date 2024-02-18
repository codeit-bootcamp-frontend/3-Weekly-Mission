import Image from "next/image";
import close from "../public/close.svg";
import styles from "./SearchBar.module.css";
import { useRef } from "react";

export default function SearchBar({ handleInputChange }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    handleInputChange(inputRef?.current?.value);
  };

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      handleInputChange("");
    }
  };
  return (
    <>
      <div className={styles["search-bar"]}>
        <input
          ref={inputRef}
          className={styles["search"]}
          type="text"
          placeholder="링크를 검색해 보세요."
          onChange={onChange}
        />
        {inputRef?.current?.value && (
          <Image src={close} alt="close-icon" onClick={clear} />
        )}
      </div>
      {inputRef?.current?.value && (
        <h2 className={styles["search-result-bar"]}>
          {inputRef?.current?.value}
          <span className={styles["search-result-highlight"]}>
            으로 검색한 결과입니다.
          </span>
        </h2>
      )}
    </>
  );
}
