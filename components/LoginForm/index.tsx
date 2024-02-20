"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./index.module.css";
import eyeIcon from "../../images/eye-off.svg";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onBlur" });

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력해 주세요."
        style={errors?.email && { borderColor: "red" }}
        {...register("email", {
          required: "이메일을 입력해 주세요.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      {errors.email && (
        <p className={styles.errorMessage}>{errors.email.message as string}</p>
      )}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        style={errors?.password && { borderColor: "red" }}
        className={errors?.password ? styles.error : ""}
        {...register("password", {
          required: "비밀번호를 입력해 주세요.",
        })}
      />
      <Image src={eyeIcon} alt="비밀번호 보기" className={styles.eyeIcon} />
      {errors.password && (
        <p className={styles.errorMessage}>
          {errors.password.message as string}
        </p>
      )}
      <button
        className={styles.formButton}
        type="submit"
        disabled={isSubmitting}
      >
        로그인
      </button>
    </form>
  );
};
export default LoginForm;
