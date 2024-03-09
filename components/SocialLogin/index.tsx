import Link from "next/link";
import Image from "next/image";
import styles from "./SocialLogin.module.css";

const SocialLogin = ({ children = "소셜 로그인" }: { children: string }) => {
  return (
    <div className={styles["social-login"]}>
      <span className={styles.text}>{children}</span>
      <div className={styles.links}>
        <Link href="https://www.google.com">
          <div className={`${styles["icon-box"]} ${styles.google}`}>
            <div className={styles.image}>
              <Image fill src="/assets/google.png" alt="구글 로그인" />
            </div>
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <div className={`${styles["icon-box"]} ${styles.kakao}`}>
            <div className={styles.image}>
              <Image fill src="/assets/kakao.svg" alt="카카오 로그인" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
