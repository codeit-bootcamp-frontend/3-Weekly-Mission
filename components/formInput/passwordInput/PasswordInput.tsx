import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./PasswordInput.module.scss";
import Image from "next/image";

type PasswordInputProps = {
  hasError?: FieldError;
  name: string;
  register: UseFormRegister<any>;
  onClick?: () => void;
  eyeOpen?: boolean;
  placeHolder?: string;
};

export default function PasswordInput({
  hasError,
  name,
  register,
  onClick,
  eyeOpen,
  placeHolder,
}: PasswordInputProps) {
  return (
    <div className={styles.input}>
      <input
        className={hasError ? styles.error : ""}
        {...register(name, {
          required: { value: true, message: "비밀번호를 입력해주세요" },
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
            message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
          },
        })}
        name={name}
        type={eyeOpen ? "text" : "password"}
        placeholder={placeHolder}
      />
      <Image
        className={styles.eyeButton}
        src={eyeOpen ? "/assets/eye-on.svg" : "/assets/eye-off.svg"}
        width={16}
        height={16}
        alt="눈알 버튼"
        onClick={onClick}
      />
    </div>
  );
}
