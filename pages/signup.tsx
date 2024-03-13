import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import SignUpForm from "@/components/sign/SignupForm";
import SocialLoginForm from "@/components/sign/SocialLoginForm";
import AccountHeader from "@/components/sign/AccountHeader";

const cx = classNames.bind(styles);

export default function Signup() {
  return (
    <main className={cx("login-page")}>
      <section className={cx("section")}>
        <AccountHeader signin={false}/>
        <SignUpForm />
      </section>

      <section className={cx("section", "social-login")}>
        <SocialLoginForm>다른 방식으로 가입하기</SocialLoginForm>
      </section>
    </main>
  );
}
