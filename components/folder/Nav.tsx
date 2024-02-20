import React from "react";
import styles from "./Nav.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import UserProfileInHeader from "./UserProfileInHeader";

const cx = classNames.bind(styles);

export default function Nav() {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-content")}>
        <Link href="/">
          <img
            className={cx("header-logo-img")}
            src="/images/logo.png"
            alt="코드잇로고"
          ></img>
        </Link>
        <UserProfileInHeader />
      </div>
    </nav>
  );
}
