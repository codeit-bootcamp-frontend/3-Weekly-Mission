import React from "react";
import styles from "./snsLogin.module.css";
import Link from "next/link";
import Image from "next/image";
import { kakao_svg  } from "@/public/image";
const SnsLogin = () => {
  const kakaoUrl = "https://www.kakaocorp.com/page";
  const googleUrl = "https://www.google.com";

  return (
    <div className={styles.sns_Login_wrapper}>
      <p className={styles.sns_Login_text}>소셜로그인</p>
      <ul className={styles.sns_Icon_wrapper}>
        <li>
          <Link href={googleUrl}>

          </Link>
        </li>
        <li>
          <Link href={kakaoUrl}></Link>
        </li>
      </ul>
    </div>
  );
};

export default SnsLogin;
