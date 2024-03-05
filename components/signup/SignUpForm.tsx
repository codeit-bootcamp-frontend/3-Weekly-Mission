"use client";

import classNames from "classnames/bind";
import styles from "./SignUpForm.module.scss";
import { checkEmail, signUpAPI } from "../../api/signApi";
import { useRouter } from "next/navigation";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidation } from "../../utils/validationSchemas";

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
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(signUpValidation),
  });

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
        placeholder="이메일을 입력해 주세요"
        register={register}
        error={errors.email}
        onBlur={handleEmailCheckOnblur}
      />
      <Input
        type="password"
        name="password"
        label="비밀번호"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
        register={register}
        error={errors.password}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="비밀번호 확인"
        placeholder="비밀번호와 일치하는 값을 입력해 주세요"
        register={register}
        error={errors.confirmPassword}
      />
      <div>
        <button id="loginButton" type="submit">
          회원가입
        </button>
      </div>
    </form>
  );
}
