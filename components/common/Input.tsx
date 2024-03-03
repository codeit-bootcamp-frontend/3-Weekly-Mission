import classNames from "classnames/bind";
import React from "react";
import {
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import styles from "./input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  onBlur?: () => void;
  error?: FieldError | undefined;
  watch?: UseFormWatch<any>;
  clearErrors?: UseFormClearErrors<any>;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  register,
  required = false,
  minLength,
  pattern,
  onBlur,
  error,
  watch,
  clearErrors,
}) => {
  const handleFocusIn = () => {
    if (clearErrors) {
      clearErrors(name);
    }
  };
  return (
    <div>
      <label className={cx("label")} htmlFor={name}>
        {label}
      </label>
      <input
        className={cx("input", { "input-error": error })}
        type={type}
        id={name}
        onFocus={handleFocusIn}
        {...register(name, {
          required: required && {
            value: required,
            message: `${label}을(를) 입력해주세요.`,
          },
          minLength: minLength && {
            value: minLength,
            message: `${label}은(는) 최소 ${minLength}자 이상 입력해주세요.`,
          },
          pattern: pattern && {
            value: pattern,
            message: `${label}의 형식이 올바르지 않습니다.`,
          },
          validate: (value: string) => {
            if (watch && watch("password") !== value) {
              return "비밀번호가 일치하지 않아요";
            }
          },
          onBlur: onBlur && onBlur,
        })}
      />
      {error && <div className={cx("error-message")}>{error.message}</div>}
    </div>
  );
};

export default Input;
