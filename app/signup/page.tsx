import classNames from "classnames/bind";
import styles from "../signin/SignInPage.module.scss";
import Link from "next/link";
import SignUpForm from "../../components/signup/SignUpForm";

const cx = classNames.bind(styles);

export default function SignUpPage() {
  return (
    <>
      <header>
        <div className={cx("header-container")}>
          <Link href="/">
            <img src="/images/logo-sign.png" alt="로고" />
          </Link>
          <div className={cx("ask-singup")}>
            <div className={cx("ask-singup-text")}>이미 회원이신가요?</div>
            <div className={cx("ask-singup-link")}>
              <Link href="/signin">로그인 하기</Link>
            </div>
          </div>
        </div>
      </header>

      <div className={cx("container")}>
        <SignUpForm />
        <div className={cx("content-sns")}>
          <div className={cx("content-sns-text")}>다른 방식으로 가입하기</div>
          <div className={cx("content-sns-logo")}>
            <a href="https://www.google.com/">
              <img src="/images/google-logo.png" alt="구글로고" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="/images/kakao-logo.png" alt="카카오로고" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
