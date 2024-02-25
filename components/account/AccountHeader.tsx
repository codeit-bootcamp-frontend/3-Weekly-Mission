import styles from "@/styles/accountPage.module.css";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function AccountHeader({ signin }: { signin: boolean }) {
  return (
    <div className={cx("header")}>
      <Link href="/">
        <Image
          width={210}
          height={38}
          className={cx("logo")}
          src="/logo.svg"
          alt="logo"
        />
      </Link>
      <div className={cx("not-user")}>
        <span>{signin ? "회원이 아니신가요?" : "이미 회원이신가요?"}</span>
        <Link className={cx("sign-up")} href={signin ? "/signup" : "/signin"}>
          {signin ? "회원 가입하기" : "로그인하기"}
          <div className={cx("under-line")}></div>
        </Link>
      </div>
    </div>
  );
}
