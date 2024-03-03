import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/utils";
import { useState } from "react";
import { FormInput } from "@/lib/types";
import { postCheckEmail } from "@/lib/api";
import Image from "next/image";
import styles from "./AuthInput.module.css";

interface AuthInputProps {
  type: "email" | "emailSignup" | "password" | "passwordSignup" | "passwordConfirm";
  register: UseFormRegister<FormInput>;
  watch?: UseFormWatch<FormInput>;
  errors: FieldErrors<FormInput>;
  isSubmit?: boolean;
}

const ERROR_MESSAGE = {
  email: {
    check: "이메일을 확인해 주세요.",
    input: "이메일을 입력해 주세요.",
    correct: "올바른 이메일 주소가 아닙니다.",
    duplication: "이미 사용 중인 이메일입니다.",
  },
  password: {
    check: "비밀번호를 확인해 주세요.",
    input: "비밀번호를 입력해 주세요.",
    placeholder: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
    vaild: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  },
  passwordConfirm: {
    placeholder: "비밀번호와 일치하는 값을 입력해 주세요.",
    vaild: "비밀번호가 일치하지 않아요.",
  },
};

const AuthInput = ({ type = "email", register, watch, errors, isSubmit }: AuthInputProps) => {
  const [isEyeIcon, setIsEyeIcon] = useState(false);

  const handleEyeIconClick = () => {
    setIsEyeIcon(!isEyeIcon);
  };

  const checkEmail = async (email: string) => {
    const result = await postCheckEmail(email);
    return result.error ? false : true;
  };

  return (
    <>
      {(type === "email" || type === "emailSignup") && (
        <div className={styles["input-box"]}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input
            className={styles.input}
            {...register("email", {
              required: true,
              pattern: EMAIL_REGEX,
              validate: async (value) => await checkEmail(value),
            })}
            id="email"
            name="email"
            type={type}
            placeholder={ERROR_MESSAGE.email.input}
          />
          {type === "emailSignup" ? (
            <>
              {errors?.email?.type === "pattern" && (
                <p className={styles["error-message"]}>{ERROR_MESSAGE.email.correct}</p>
              )}
              {errors?.email?.type === "validate" && (
                <p className={styles["error-message"]}>{ERROR_MESSAGE.email.duplication}</p>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}

      {(type === "password" || type === "passwordSignup" || type === "passwordConfirm") && (
        <div className={styles["passwordInput-container"]}>
          <div className={styles["input-box"]}>
            <label className={styles.label} htmlFor="password">
              비밀번호
            </label>

            {type === "password" && (
              <>
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
              </>
            )}

            {type === "passwordSignup" && (
              <>
                <input
                  className={styles.input}
                  placeholder={ERROR_MESSAGE.password.placeholder}
                  {...register("password", { minLength: 8, pattern: PASSWORD_REGEX })}
                  id="password"
                  name="password"
                  type={isEyeIcon ? "text" : "password"}
                />
                {(errors?.password?.type === "minLength" || errors?.password?.type === "pattern") && (
                  <p className={styles["error-message"]}>{ERROR_MESSAGE.password.vaild}</p>
                )}
              </>
            )}

            {type === "passwordConfirm" && (
              <>
                <input
                  className={styles.input}
                  placeholder={ERROR_MESSAGE["passwordConfirm"].placeholder}
                  {...register("passwordConfirm", { validate: (value) => value === watch?.("password") })}
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={isEyeIcon ? "text" : "password"}
                />
                {errors?.passwordConfirm?.type === "validate" && (
                  <p className={styles["error-message"]}>{ERROR_MESSAGE["passwordConfirm"].vaild}</p>
                )}
              </>
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
