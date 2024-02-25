import Image from "next/image";
import styles from "./Input.module.css";
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { EMAIL, PASSWORD } from "@/constants/sign";

interface Props {
  type: string;
  placeholder: string;
  labelName: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  validator: any;
  errorMessage: string;
  onBlur?: ((email: string) => Promise<void>) | undefined;
}

export default function Input({
  onBlur,
  type,
  placeholder,
  labelName,
  register,
  registerName,
  validator,
  errorMessage,
}: Props) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <div className={styles.inputFrame}>
        <label className={styles.formName} htmlFor={registerName}>
          {labelName}
        </label>
        <input
          className={`${styles.formInput} ${errorMessage && styles.inputError}`}
          id={registerName}
          type={type === PASSWORD && isShowPassword ? "text" : type}
          placeholder={placeholder}
          {...register(registerName, validator)}
          onBlur={(e) => onBlur?.(e.target.value)}
        />

        {errorMessage && (
          <span className={styles.errMsg} id="err-email">
            {errorMessage}
          </span>
        )}

        {registerName !== EMAIL && (
          <span className={styles.eyeIcon}>
            <Image
              fill
              src={isShowPassword ? "svgs/eye-on.svg" : "svgs/eye-off.svg"}
              alt="비밀번호 가리기"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          </span>
        )}
      </div>
    </>
  );
}
