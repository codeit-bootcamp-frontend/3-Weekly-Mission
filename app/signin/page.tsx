import Link from "next/link";
import styles from "./index.module.css";
import BigGoMainLogo from "../../components/BigGoMainLogo";
import LoginForm from "../../components/LoginForm";
import LoginSocialBox from "../../components/LoginSocialBox";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <BigGoMainLogo />
          <span>
            회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
          </span>
        </div>
        <LoginForm />
        <LoginSocialBox />
      </div>
    </div>
  );
};

export default Signin;
