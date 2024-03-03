import Image from "next/image";
import close from "../public/close.svg";
import styles from "./SearchBar.module.css";
import { ChangeEvent, useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  handleInputChange: (value: string) => void;
}
export default function SearchBar({ handleInputChange }: Props) {
  const [inputValue, setInputValue] = useState("");

  const clear = () => {
    setInputValue("");
    handleInputChange("");
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleInputChange(value);
    setInputValue(value);
  };
  return (
    <>
      <div className={cx("search-bar")}>
        <input
          className={cx("search")}
          type="text"
          placeholder="링크를 검색해 보세요."
          onChange={inputChange}
          value={inputValue}
        />
        {inputValue && <Image src={close} alt="close-icon" onClick={clear} />}
      </div>
      {inputValue && (
        <h2 className={cx("search-result-bar")}>
          {inputValue}
          <span className={cx("search-result-highlight")}>
            으로 검색한 결과입니다.
          </span>
        </h2>
      )}
    </>
  );
}
