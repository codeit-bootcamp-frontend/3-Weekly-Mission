import styles from "./loginInput.module.css";
import { LoginInputProps } from "@/types/Types";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { eyeoff_svg, eyeon_svg } from "@/public/image/index";

const LoginInput = ({
  id,
  register,
  label,
  placeholder,
  type,
}: LoginInputProps) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const toggleisPasswordVisible = () => {
    setisPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.login_input_from}>
      <label className={styles.login_input_label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.login_input}
        id={id}
        type={
          type === "password" ? (isPasswordVisible ? "text" : "password") : undefined
        }
        placeholder={placeholder}
        {...register}
      />
      {type === "password" && (
        <Image
          className={styles.eye_icon}
          src={isPasswordVisible ? eyeon_svg : eyeoff_svg}
          alt="eye on/off"
          width={16}
          height={16}
          onClick={toggleisPasswordVisible}
        />
      )}
    </div>
  );
};
export default LoginInput;


// type={ id === "password" ? (isPasswordVisible ?  "text":"password" ) : "eamil"} 1차
// type={ id === "password" ? (isPasswordVisible ? "text" : "password") : undefined } 2차

// 이부분에서 인풋 컴포넌트를 재사용 컴포넌트로 만드려면 email이 아니라 props로 남겨주고 싶다.  타입을 지정하고 싶다
//undefined를 사용하면 타입을 지정하지 않아도 된다. 사용해도되나? 