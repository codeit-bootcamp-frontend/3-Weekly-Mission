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

// type={ id === "password" ? (isPasswordVisible ?  "text":"password" ) : "eamil"} 1차
// type={ id === "password" ? (isPasswordVisible ? "text" : "password") : undefined } 2차

// 이부분에서 인풋 컴포넌트를 재사용 컴포넌트로 만드려면 email이 아니라 props로 남겨주고 싶다.  타입을 지정하고 싶다
//undefined를 사용하면 타입을 지정하지 않아도 된다. 사용해도되나?

//에러메세지를 처리하는 css조차 인풋 컴포넌트에서 다루는게 좋을까?=> props만 늘어남
//각 signup, signin 컴포넌트에서 처리하는게 좋을까?=> 중복되는 코드가 생김
