import Image from "next/image";
import styles from "./Input.module.css";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const TEST_EMAIL = "test@codeit.com";
const TEST_PWD = "sprint101";

interface Props {
  isSignIn: boolean;
}
export default function Input({ isSignIn }: Props) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rePasswordInput, setRePasswordInput] = useState();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isRePasswordError, setIsRePasswordError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleEmailInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
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

  const handlePasswordInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsPasswordError(true);
      setPasswordErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (!isSignIn && !pwdRegex.test(e.target.value)) {
      setIsPasswordError(true);
      setPasswordErrorMsg("올바른 비밀번호 형식이 아닙니다.");
      return;
    }

    if (!isSignIn && rePasswordInput !== passwordInput) {
      setIsPasswordError(true);
      setPasswordErrorMsg("비밀번호가 다릅니다.");
      return;
    }

    setIsPasswordError(false);
  };

  const handleRePasswordInputBlur = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.value) {
      setIsRePasswordError(true);
      setRePasswordErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    if (!isSignIn && !pwdRegex.test(e.target.value)) {
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
    if (!isEmailError && !isPasswordError) {
      alert("로그인완료!");
    } else {
      alert("로그인 불가");
    }
  };

  return (
    <>
      <form id="signin-form" onSubmit={handleSubmit}>
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
              onBlur={handlePasswordInputBlur}
              required
            />
            {isPasswordError && (
              <p className={styles.errMsg} id="err-password">
                {passwordErrorMsg}
              </p>
            )}
            <Image
              src={isShowPassword ? "svgs/eye-on.svg" : "svgs/eye-off.svg"}
              className={styles.eyeIcon}
              width={20}
              height={20}
              alt="비밀번호 가리기"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          </div>
          {!isSignIn && (
            <div className={styles.inputFrame}>
              <label className={styles.formName} htmlFor="signin-password">
                비밀번호 확인
              </label>
              <input
                className={`${styles.formInput} ${
                  isRePasswordError && styles.inputError
                }`}
                id="signin-password"
                name="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="내용 입력"
                value={passwordInput}
                onBlur={handleRePasswordInputBlur}
                required
              />
              {isRePasswordError && (
                <p className={styles.errMsg} id="err-password">
                  {rePasswordErrorMsg}
                </p>
              )}
              <Image
                src={isShowPassword ? "svgs/eye-on.svg" : "svgs/eye-off.svg"}
                className={styles.eyeIcon}
                width={20}
                height={20}
                alt="비밀번호 가리기"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            </div>
          )}
        </div>
        <div className={styles.formBtn}>
          <button
            type="submit"
            className={styles.formBtnGradient}
            id="signin-btn"
          >
            로그인
          </button>
        </div>
      </form>
    </>
  );
}
