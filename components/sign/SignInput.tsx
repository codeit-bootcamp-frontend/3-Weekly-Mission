import { useState } from "react";
import styles from "./SignInput.module.css";
import Image from "next/image";
import { FieldError } from "react-hook-form";

interface SignInputData {
  id: string;
  type: string;
  error: FieldError | undefined;
  placeholder: string;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input({
  id,
  type,
  error,
  placeholder,
  value,
  onBlur,
  onChange,
}: SignInputData) {
  const [typeValue, setTypeValue] = useState<"password" | "text">("password");

  const handleEyeIconClick = () => {
    if (typeValue === "password") {
      setTypeValue("text");
    } else {
      setTypeValue("password");
    }
  };
  return (
    <div className={styles["input-container"]}>
      <div className={styles["input-box"]}>
        <input
          id={id}
          className={`${styles.input} ${error && styles.error}`}
          type={type === "password" ? typeValue : type}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        ></input>
        {type === "password" && (
          <Image
            className={styles["input-eye"]}
            width={16}
            height={16}
            src={typeValue === "text" ? "/eye-on.svg" : "/eye-off.svg"}
            alt="비밀번호 가리기"
            onClick={handleEyeIconClick}
          />
        )}
      </div>
      {error?.message && (
        <p className={styles["error-message"]} role="alert">
          {error?.message}
        </p>
      )}
    </div>
  );
}
