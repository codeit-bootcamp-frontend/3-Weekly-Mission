"use client";

import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";
import { useRouter } from "next/navigation";
import { signInAPI } from "../../api/signApi";
import Input from "../common/Input";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);
interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({ mode: "onBlur" });

  const router = useRouter();
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("accessToken")) {
      router.replace("/folder");
    }
  }

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await signInAPI(email, password);

      if (response.ok) {
        const { data } = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/folder");
      } else {
        if (response.status > 200) {
          setError("email", {
            type: "400",
            message: "이메일을 확인해 주세요",
          });
          setError("password", {
            type: "400",
            message: "비밀번호를 확인해 주세요",
          });
        }
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    handleLogin(email, password);
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
        required={true}
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        error={errors.email}
      />
      <Input
        type="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        register={register}
        required={true}
        minLength={8}
        error={errors.password}
      />
      <div>
        <button id="loginButton" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
