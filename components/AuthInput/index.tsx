import { UseFormRegister, FieldErrors } from "react-hook-form";
import { EMAIL_REGEX } from "@/lib/utils";
import { useState } from "react";
import { FormInput } from "@/lib/types";
import Image from "next/image";
import styles from "./AuthInput.module.css";

interface AuthInputProps {
  type: "email" | "password";
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
  isSubmit: boolean;
}

const ERROR_MESSAGE = {
  email: {
    check: "이메일을 확인해 주세요.",
    input: "이메일을 입력해 주세요.",
    correct: "올바른 이메일 주소가 아닙니다.",
  },
  password: {
    check: "비밀번호를 확인해 주세요.",
    input: "비밀번호를 입력해 주세요.",
  },
};

const AuthInput = ({ type = "email", register, errors, isSubmit }: AuthInputProps) => {
  const [isEyeIcon, setIsEyeIcon] = useState(false);

  const handleEyeIconClick = () => {
    setIsEyeIcon(!isEyeIcon);
  };

  return (
    <>
      {type === "email" && (
        <div className={styles["input-box"]}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input
            className={styles.input}
            {...register("email", {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            id="email"
            name="email"
            type={type}
            placeholder={ERROR_MESSAGE.email.input}
          />
          {isSubmit ? (
            <p className={styles["error-message"]}>{ERROR_MESSAGE.email.check}</p>
          ) : (
            <>
              {errors?.email?.type === "required" && (
                <p className={styles["error-message"]}>{ERROR_MESSAGE.email.input}</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className={styles["error-message"]}>{ERROR_MESSAGE.email.correct}</p>
              )}
            </>
          )}
        </div>
      )}

      {type === "password" && (
        <div className={styles["passwordInput-container"]}>
          <div className={styles["input-box"]}>
            <label className={styles.label} htmlFor="password">
              비밀번호
            </label>
            <input
              className={styles.input}
              placeholder={ERROR_MESSAGE.password.input}
              {...register("password", { required: true })}
              id="password"
              name="password"
              type={isEyeIcon ? "text" : "password"}
            />
            {isSubmit ? (
              <p className={styles["error-message"]}>{ERROR_MESSAGE.password.check}</p>
            ) : (
              errors?.password?.type === "required" && (
                <p className={styles["error-message"]}>{ERROR_MESSAGE.password.input}</p>
              )
            )}
          </div>
          <Image
            className={styles["input-eye"]}
            width={16}
            height={16}
            src={isEyeIcon ? "./assets/eye-on.svg" : "./assets/eye-off.svg"}
            alt="비밀번호 가리기"
            onClick={handleEyeIconClick}
          />
        </div>
      )}
    </>
  );
};

export default AuthInput;
