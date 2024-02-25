import { useState } from "react";
import Image from "next/image";
import styles from "./AuthInput.module.css";

const AuthInput = ({ type = "password" }: { type: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [typeValue, setTypeValue] = useState("password");

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleEyeIconClick = () => {
    if (typeValue === "password") {
      setTypeValue("string");
    } else {
      setTypeValue("password");
    }
  };

  return (
    <>
      <div className={styles["input-box"]}>
        <input
          className={`${styles.input} ${isError && styles.error}`}
          type={type === "password" ? typeValue : type}
          value={inputValue}
          placeholder="내용 입력"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={handleInputBlur}
        ></input>
        {type === "password" && (
          <Image
            className={styles["input-eye"]}
            width={16}
            height={16}
            src={typeValue === "string" ? "./assets/eye-on.svg" : "./assets/eye-off.svg"}
            alt="비밀번호 가리기"
            onClick={handleEyeIconClick}
          />
        )}
      </div>
      {isError && <p className={styles["error-message"]}>내용을 다시 작성해주세요</p>}
    </>
  );
};

export default AuthInput;
