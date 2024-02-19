import Link from "next/link";
import Image from "next/image";
import styles from "../SignInForm/SignInForm.module.css";

export default function SignUpForm({ children }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.loginBox}>
        <div className={styles.logoBox}>
          <Link href="/">
            <span className={styles.logo}>
              <Image fill src="svgs/logo.svg" alt="logo" />
            </span>
          </Link>

          <div className={styles.linkBox}>
            <span className={styles.text}>이미 회원이신가요?</span>
            <Link className={styles.linktext} href="signin">
              로그인 하기
            </Link>
          </div>
        </div>

        {children}
      </div>

      <div className={styles.socialLoginBox}>
        <span className={styles.socialLoginText}>다른 방식으로 가입하기</span>
        <div className={styles.socialIcons}>
          <a href="https://www.google.com/">
            <span className={styles.socialIcon}>
              <Image fill src="svgs/google-icon.svg" alt="logo" />
            </span>
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <span className={styles.socialIcon}>
              <Image fill src="svgs/kakao-icon.svg" alt="logo" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
