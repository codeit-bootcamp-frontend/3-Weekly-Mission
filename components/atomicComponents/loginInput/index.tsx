import styles from "./loginInput.module.css";
import { LoginInputProps } from "@/types/Types";
import React from "react";

const LoginInput = ({
  id,
  register,
  label,
  suffix,
  ...rest
}: LoginInputProps) => {
 
  return (
    <div className={styles.login_input_from}>
      <label className={styles.login_input_label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.login_input}
        id={id}
        {...register}
        {...rest}
      />
      {suffix}
    </div>
  );
};
export default LoginInput;
