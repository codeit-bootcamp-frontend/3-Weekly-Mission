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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className={styles.login_input_from}>
      <label className={styles.login_input_label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.login_input}
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register}
      />
      {id === "password" && 
        <Image
          className={styles.eye_icon}
          src={showPassword ? eyeoff_svg : eyeon_svg}
          alt="eye on/off"
          width={16}
          height={16}
          onClick={toggleShowPassword}
        />
      }
    </div>
  );
};
export default LoginInput;

