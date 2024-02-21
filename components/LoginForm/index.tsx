"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./index.module.css";
import eyeOffIcon from "../../images/eye-off.svg";
import eyeOnIcon from "../../images/eye-on.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm({ mode: "onBlur" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("accessToken", responseData.accessToken);
      router.push("/folder");
    } else {
      alert("이메일 또는 비밀번호를 확인해 주세요.");
      setError("email", {
        type: "manual",
        message: "이메일을 확인해 주세요.",
      });
      setError("password", {
        type: "manual",
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
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
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호를 입력해 주세요."
        style={errors?.password && { borderColor: "red" }}
        className={errors?.password ? styles.error : ""}
        {...register("password", {
          required: "비밀번호를 입력해 주세요.",
        })}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={styles.eyeIcon}
      >
        <Image
          src={showPassword ? eyeOffIcon : eyeOnIcon}
          alt="비밀번호 보기"
          width={16}
          height={16}
        />
      </button>
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
