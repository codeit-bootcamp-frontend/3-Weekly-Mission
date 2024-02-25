import { useState } from "react";
import styles from "./Input.module.css";
import Image from "next/image";
export function Input({
  id,
  type,
  register,
  error,
  placeholder,
}: {
  id: string;
  type: string;
  register: any;
  error: any;
  placeholder: string;
}) {
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
          {...register}
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
