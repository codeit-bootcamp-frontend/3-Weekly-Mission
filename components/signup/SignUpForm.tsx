"use client";

import classNames from "classnames/bind";
import styles from "./SignUpForm.module.scss";
import { checkEmail, signUpAPI } from "../../api/signApi";
import { useRouter } from "next/navigation";
import Input from "../common/Input";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);
interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    watch,
    clearErrors,
  } = useForm<FormData>({ mode: "onBlur" });

  const router = useRouter();
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("accessToken")) {
      router.replace("/folder");
    }
  }

  const handleEmailCheckOnblur = async () => {
    const response = await checkEmail(getValues("email"));
    console.log(response.status);
    if (response.status === 409) {
      setError("email", {
        type: "manual",
        message: "이미 사용 중인 이메일입니다.",
      });
      return;
    }
  };

  const onSubmit = async (data) => {
    handleEmailCheckOnblur();
    const { email, password } = data;
    try {
      // 회원가입 요청
      const response = await signUpAPI(email, password);
      if (response.ok) {
        // 회원가입 성공 시
        const { data } = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/folder");
      } else {
        console.error("회원가입 실패:", response.statusText);
        // 실패 시 에러 처리
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      // 오류 발생 시 에러 처리
    }
  };

  return (
    <form
      className={cx("loginForm")}
      id="loginForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="email"
        name="email"
        label="이메일"
        register={register}
        required={true}
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        error={errors.email}
        onBlur={handleEmailCheckOnblur}
        clearErrors={clearErrors}
      />
      <Input
        type="password"
        name="password"
        label="비밀번호"
        register={register}
        required={true}
        minLength={8}
        error={errors.password}
        clearErrors={clearErrors}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="비밀번호 확인"
        register={register}
        required={true}
        error={errors.confirmPassword}
        watch={watch}
        clearErrors={clearErrors}
      />
      <div>
        <button id="loginButton" type="submit">
          회원가입
        </button>
      </div>
    </form>
  );
}
