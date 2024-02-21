"use client";

import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";
import { useState } from "react";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import { useRouter } from "next/navigation";
import { signInAPI } from "../../api/signApi";

const cx = classNames.bind(styles);

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("accessToken")) {
      router.replace("/folder");
    }
  }

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("이메일을 입력해 주세요.");
    } else if (!validateEmail(email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleTogglePassword = () => {
    setPasswordError("");
    setIsVisiblePassword((prevState) => !prevState);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await signInAPI(email, password);

      if (response.ok) {
        const { data } = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/folder");
      } else {
        const data = await response.json();
        setEmailError(data.error && "이메일을 확인해 주세요.");
        setPasswordError(data.error && "비밀번호를 확인해 주세요.");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form
      className={cx("loginForm")}
      action=""
      id="loginForm"
      onSubmit={handleSubmit}
    >
      <EmailInput
        email={email}
        handleEmailBlur={handleEmailBlur}
        setEmail={setEmail}
        emailError={emailError}
      />
      <PasswordInput
        isVisiblePassword={isVisiblePassword}
        password={password}
        handlePasswordBlur={handlePasswordBlur}
        setPassword={setPassword}
        handleTogglePassword={handleTogglePassword}
        passwordError={passwordError}
        placeholder="비밀번호를 입력해주세요"
      />
      <div>
        <button id="loginButton" type="submit">
          로그인
        </button>
      </div>
    </form>
  );
}
