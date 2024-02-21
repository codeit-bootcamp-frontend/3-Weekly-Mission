"use client";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./index.module.css";
import eyeOffIcon from "../../images/eye-off.svg";
import eyeOnIcon from "../../images/eye-on.svg";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
    setError,
  } = useForm({ mode: "onBlur" });
  const password = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmationVisibility = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const checkEmail = async (email) => {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();

    if (response.status === 409) {
      setError("email", {
        type: "manual",
        message: "이미 사용 중인 이메일입니다.",
      });
    }
  };

  const onSubmit = async (data) => {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
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
      alert("회원가입에 실패했습니다.");
      setError("email", {
        type: "manual",
        message: "이메일을 확인해 주세요.",
      });
      setError("password", {
        type: "manual",
        message: "비밀번호를 확인해 주세요.",
      });
      setError("passwordConfirmation", {
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
          onBlur: (e) => checkEmail(e.target.value),
        })}
      />
      {errors.email && (
        <p className={styles.errorMessage}>{errors.email.message as string}</p>
      )}

      <label htmlFor="password">비밀번호</label>
      <div className={styles.inputWrapper}>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="영문, 숫자를 조합해 8자 이상으로 입력해 주세요."
          style={errors?.password && { borderColor: "red" }}
          className={errors?.password ? styles.error : ""}
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            },
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
      </div>
      {errors.password && (
        <p className={styles.errorMessage}>
          {errors.password.message as string}
        </p>
      )}

      <label htmlFor="passwordConfirmation">비밀번호 확인</label>
      <div className={styles.inputWrapper}>
        <input
          id="passwordConfirmation"
          type={showPasswordConfirmation ? "text" : "password"}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          style={errors?.password && { borderColor: "red" }}
          className={errors?.password ? styles.error : ""}
          {...register("passwordConfirmation", {
            required: "비밀번호를 입력해 주세요.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <button
          type="button"
          onClick={togglePasswordConfirmationVisibility}
          className={styles.eyeIcon}
        >
          <Image
            src={showPasswordConfirmation ? eyeOffIcon : eyeOnIcon}
            alt="비밀번호 보기"
            width={16}
            height={16}
          />
        </button>
      </div>
      {errors.passwordConfirmation && (
        <p className={styles.errorMessage}>
          {errors.passwordConfirmation.message as string}
        </p>
      )}

      <button
        className={styles.formButton}
        type="submit"
        disabled={isSubmitting}
      >
        회원가입
      </button>
    </form>
  );
};

const SignupFormWithNoSSR = dynamic(() => Promise.resolve(SignupForm), {
  ssr: false,
});

export default SignupFormWithNoSSR;
