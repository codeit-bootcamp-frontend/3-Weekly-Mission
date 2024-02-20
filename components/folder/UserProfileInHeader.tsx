import { useEffect, useState } from "react";
import { User, getUserProfile } from "../../api/api";
import Link from "next/link";
import styles from "./UserProfileInHeader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function UserProfileInHeader() {
  const user = await getUserProfile(1);
  return (
    <Link className={cx("userProfile-link")} href="/folder">
      {user ? (
        <>
          <img
            className={cx("userProfile-login-img")}
            src={user.image_source}
            alt="사용자 이미지"
          />
          <span className={cx("userProfile-login-email")}>{user.email}</span>
        </>
      ) : (
        <img src="images/로그인.png" alt="로그인" />
      )}
    </Link>
  );
}
