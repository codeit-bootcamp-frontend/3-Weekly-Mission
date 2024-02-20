import Link from "next/link";
import styles from "./index.module.css";
import BigGoMainLogo from "../../components/BigGoMainLogo";
import LoginSocialBox from "../../components/LoginSocialBox";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <BigGoMainLogo />
          <span>
            이미 회원이신가요? <Link href="/signin">로그인 하기</Link>
          </span>
        </div>
        <SignupForm />
        <LoginSocialBox />
      </div>
    </div>
  );
};

export default Signup;
