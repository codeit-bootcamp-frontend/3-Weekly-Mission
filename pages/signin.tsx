
import SigninForm from "@/components/accountPage/SigninForm";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import SocialLoginForm from "@/components/accountPage/SocialLoginForm";
import AccountHeader from "@/components/accountPage/AccountHeader";

const cx = classNames.bind(styles);

export default function Signin() {
  return (
    <main className={cx("login-page")}>
      <section className={cx("section")}>
        <AccountHeader signin={true} />
        <SigninForm />
      </section>

      <section className={cx("section", "social-login")}>
        <SocialLoginForm>소셜 로그인</SocialLoginForm>
      </section>
    </main>
  );
}
