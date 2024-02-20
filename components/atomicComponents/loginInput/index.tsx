import React, { Children } from "react";
import styles from "./loginInput.module.css";

interface LoginInputProps {
  Children: string;
  placeholder: string;
}

const LoginInput = ({ Children, placeholder }:LoginInputProps) => {
  return (
    <form className={styles.login_input_from}>
      <label className={styles.login_input_label} >{Children}</label>
      <input
        className={styles.login_input}
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

export default LoginInput;
