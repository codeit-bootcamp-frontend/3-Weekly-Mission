import classNames from "classnames/bind";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  onBlur?: () => void;
  error?: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  placeholder,
  register,
  onBlur,
  error,
  ...props
}) => {
  return (
    <div>
      <label className={cx("label")} htmlFor={name}>
        {label}
      </label>
      <input
        className={cx("input", { "input-error": error })}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, {
          onBlur: onBlur && onBlur,
        })}
        {...props}
      />
      {error && <div className={cx("error-message")}>{error.message}</div>}
    </div>
  );
};

export default Input;
