import Link from "next/link";
import Image from "next/image";
import styles from "../SignInForm/SignInForm.module.css";

export default function SignUpForm({ children }) {
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
