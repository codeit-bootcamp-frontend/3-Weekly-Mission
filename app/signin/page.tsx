import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import googleIcon from "../../images/googleIcon.svg";
import kakaotalkIcon from "../../images/kakaotalkIcon.svg";
import BigGoMainLogo from "../../components/BigGoMainLogo";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <BigGoMainLogo />
          <span>
            회원이 아니신가요?
            <Link
              href="/signup
        "
            >
              회원 가입하기
            </Link>
          </span>
        </div>
        <form className={styles.form}>
          <span>이메일</span>
          <input type="email" placeholder="이메일을 입력해 주세요." />
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            className={styles.password}
          />
          <button type="submit">로그인</button>
        </form>
        <div className={styles.social}>
          <span>소셜 로그인</span>
          <div>
            <Link href="https://www.google.com">
              <Image
                src={googleIcon}
                width={45}
                height={45}
                alt="구글 아이콘"
                className={styles.button}
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image
                src={kakaotalkIcon}
                width={45}
                height={45}
                alt="카카오톡 아이콘"
                className={styles.button}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
