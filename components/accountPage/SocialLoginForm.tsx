import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function SocialLoginForm({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <div className={cx("google-and-kakao-login")}>
        <Link href="https://www.google.com/">
          <div className={cx("bg", "google")}>
            <Image
              width={22}
              height={22}
              className={cx("google-login")}
              src="/google-icon.svg"
              alt="google-login"
            />
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <div className={cx("bg", "kakao")}>
            <Image
              width={26}
              height={24}
              className={cx("kakao-login")}
              src="/kakao-icon.svg"
              alt="kakao-login"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
