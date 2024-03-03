import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./EmailInput.module.scss";

type EmailInputProps = {
  hasError?: FieldError;
  name: string;
  register: UseFormRegister<any>;
  placeHolder?: string;
  onBlur?: () => void;
};

export default function EmailInput({
  hasError,
  name,
  register,
  placeHolder,
  onBlur,
}: EmailInputProps) {
  return (
    <div className={styles.input}>
      <input
        className={hasError ? styles.error : ""}
        {...register(name, {
          required: { value: true, message: "이메일을 입력해주세요" },
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
        placeholder={placeHolder}
        onBlur={onBlur}
      />
    </div>
  );
}
