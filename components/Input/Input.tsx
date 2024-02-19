import Link from "next/link";
import Image from "next/image";
import styles from "./Input.module.css";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const TEST_EMAIL = "test@codeit.com";
const TEST_PWD = "sprint101";

interface Props {
  isSignUp?: boolean;
}
export default function Input({ isSignUp }: Props) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [rePasswordInput, setRePasswordInput] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isRePasswordError, setIsRePasswordError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailInput(value);
  };

  const handleEmailInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      // setEmailInput(e.target.value);
      setIsEmailError(true);
      setEmailErrorMsg("이메일을 입력해주세요");

      return;
    }

    if (!emailRegex.test(e.target.value)) {
      setIsEmailError(true);
      setEmailErrorMsg("올바른 이메일 주소가 아닙니다.");
      return;
    }

    setIsEmailError(false);
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPasswordInput(value);
  };

  const handlePasswordInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsPasswordError(true);
      setPasswordErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (isSignUp && !pwdRegex.test(e.target.value)) {
      setIsPasswordError(true);
      setPasswordErrorMsg("올바른 비밀번호 형식이 아닙니다.");
      return;
    }

    if (isSignUp && rePasswordInput !== passwordInput) {
      setIsPasswordError(true);
      setPasswordErrorMsg("비밀번호가 다릅니다.");
      return;
    }

    setIsPasswordError(false);
  };

  const handleRePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setRePasswordInput(value);
  };

  const handleRePasswordInputBlur = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.value) {
      setIsRePasswordError(true);
      setRePasswordErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (isSignUp && !pwdRegex.test(e.target.value)) {
      setIsRePasswordError(true);
      setRePasswordErrorMsg("올바른 비밀번호 형식이 아닙니다.");
      return;
    }
    if (rePasswordInput !== passwordInput) {
      setIsRePasswordError(true);
      setRePasswordErrorMsg("비밀번호가 다릅니다.");
      return;
    }

    setIsRePasswordError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isEmailError ||
      isEmailError ||
      TEST_EMAIL !== emailInput ||
      TEST_PWD !== passwordInput
    ) {
      console.log(
        emailInput,
        passwordInput,
        TEST_EMAIL !== emailInput,
        TEST_PWD !== passwordInput
      );
      alert("로그인 실패");
    } else {
      alert("로그인완료!");
    }
  };

  return (
    <>
      <form className={styles.form} id="signin-form" onSubmit={handleSubmit}>
        <div className={styles.formBox}>
          <div className={styles.inputFrame}>
            <label className={styles.formName} htmlFor="signin-email">
              이메일
            </label>
            <input
              className={`${styles.formInput} ${
                isEmailError && styles.inputError
              }`}
              id="signin-email"
              name="email"
              type="email"
              placeholder="내용 입력"
              value={emailInput}
              required
              onChange={handleEmailInputChange}
              onBlur={handleEmailInputBlur}
            />
            {isEmailError && (
              <p className={styles.errMsg} id="err-email">
                {emailErrorMsg}
              </p>
            )}
          </div>
          <div className={styles.inputFrame}>
            <label className={styles.formName} htmlFor="signin-password">
              비밀번호
            </label>
            <input
              className={`${styles.formInput} ${
                isPasswordError && styles.inputError
              }`}
              id="signin-password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="내용 입력"
              value={passwordInput}
              onChange={handlePasswordInputChange}
              onBlur={handlePasswordInputBlur}
              required
            />
            {isPasswordError && (
              <p className={styles.errMsg} id="err-password">
                {passwordErrorMsg}
              </p>
            )}
            <span className={styles.eyeIcon}>
              <Image
                fill
                src={isShowPassword ? "svgs/eye-on.svg" : "svgs/eye-off.svg"}
                alt="비밀번호 가리기"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            </span>
          </div>
          {isSignUp && (
            <div className={styles.inputFrame}>
              <label className={styles.formName} htmlFor="signin-repassword">
                비밀번호 확인
              </label>
              <input
                className={`${styles.formInput} ${
                  isRePasswordError && styles.inputError
                }`}
                id="signin-repassword"
                name="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="내용 입력"
                value={passwordInput}
                onChange={handleRePasswordInputChange}
                onBlur={handleRePasswordInputBlur}
                required
              />
              {isRePasswordError && (
                <p className={styles.errMsg} id="err-password">
                  {rePasswordErrorMsg}
                </p>
              )}
              <span className={styles.eyeIcon}>
                <Image
                  fill
                  src={isShowPassword ? "svgs/eye-on.svg" : "svgs/eye-off.svg"}
                  alt="비밀번호 가리기"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              </span>
            </div>
          )}
        </div>
        <div className={styles.formBtn}>
          <button
            type="submit"
            className={styles.formBtnGradient}
            id="signin-btn"
          >
            {isSignUp ? "회원가입" : "로그인"}
          </button>
        </div>
      </form>
    </>
  );
}
