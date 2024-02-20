"use client";

import classNames from "classnames/bind";
import styles from "./SignUpForm.module.scss";
import { useState } from "react";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { checkEmail, signUpAPI } from "../../api/signApi";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const router = useRouter();
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
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
    } else if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      setPasswordError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않아요.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleTogglePassword = () => {
    setPasswordError("");
    setIsVisiblePassword((prevState) => !prevState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || password !== confirmPassword) {
      // 필수 입력값이 없거나 비밀번호가 일치하지 않는 경우 에러 처리
      return;
    }
    try {
      // 중복된 이메일 확인
      const isEmailTaken = await checkEmail(email);
      if (isEmailTaken) {
        setEmailError("이미 사용 중인 이메일입니다.");
        return;
      }

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

  const validateEmail = (email: string): boolean => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
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
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
      />
      <ConfirmPasswordInput
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleConfirmPasswordBlur={handleConfirmPasswordBlur}
        confirmPasswordError={confirmPasswordError}
        isVisiblePassword={isVisiblePassword}
        handleTogglePassword={handleTogglePassword}
      />
      <div>
        <button id="loginButton" type="submit">
          회원가입
        </button>
      </div>
    </form>
  );
}
