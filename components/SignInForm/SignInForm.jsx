import Link from "next/link";
import Image from "next/image";
import styles from "./SignInForm.module.css";

export default function SignInForm({ children }) {
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
            <span className={styles.text}>회원이 아니신가요?</span>
            <Link className={styles.linktext} href="signup">
              회원 가입하기
            </Link>
          </div>
        </div>
      </div>
      {children}
      <div className={styles.socialLoginBox}>
        <span className={styles.socialLoginText}>소셜 로그인</span>
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
