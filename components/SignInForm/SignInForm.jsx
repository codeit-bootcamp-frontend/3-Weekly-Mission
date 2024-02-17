import Link from "next/link";
import Image from "next/image";
import styles from "./SignInForm.module.css";

export default function SignInForm() {
  return (
    <div className={styles.wrap}>
      <div className={styles.loginBox}>
        <div className={styles.logoBox}>
          <Link href="/">
            <Image
              src="svgs/logo.svg"
              className={styles.logo}
              width={20}
              height={20}
              alt="logo"
            />
          </Link>

          <div className={styles.linkBox}>
            <span className={styles.text}>회원이 아니신가요?</span>
            <Link className={styles.linktext} href="signup">
              회원 가입하기
            </Link>
          </div>
        </div>

        <form id="signin-form">
          <div className={styles.formBox}>
            <div className={styles.inputFrame}>
              <label className={styles.formName} for="signin-email">
                이메일
              </label>
              <input
                className={styles.formInput}
                id="signin-email"
                name="email"
                type="email"
                required
              />
              <p className={styles.errMsg} id="err-email">
                이메일을 입력해주세요.
              </p>
            </div>
            <div className={styles.inputFrame}>
              <label className={styles.formName} for="signin-password">
                비밀번호
              </label>
              <input
                className={styles.formInput}
                id="signin-password"
                name="password"
                type="password"
                required
              />
              <p className={styles.errMsg} id="err-password">
                비밀번호를 입력해주세요.
              </p>
              <Image
                src="svgs/eye-off.svg"
                className={styles.eyeIcon}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
          </div>
          <div className={styles.formBtn}>
            <button
              type="button"
              className={styles.formBtnGradient}
              id="signin-btn"
            >
              로그인
            </button>
          </div>
        </form>
      </div>

      <div className={styles.socialLoginBox}>
        <span className={styles.socialLoginText}>소셜 로그인</span>
        <div className={styles.socialIcons}>
          <a href="https://www.google.com/">
            <Image
              src="svgs/google-icon.svg"
              className={styles.socialIcon}
              width={20}
              height={20}
              alt="logo"
            />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <Image
              src="svgs/kakao-icon.svg"
              className={styles.socialIcon}
              width={20}
              height={20}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
