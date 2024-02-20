import React from "react";
import styles from "./logoText.module.css";
import Image from "next/image";
import { logo_svg } from "@/public/image";
import Link from "next/link";

interface LogoTextProps {
  text: string;
  linkText: string;
}

const LogoText = ({text,linkText} : LogoTextProps) => {
  return (
    <div className={styles.logo_text_wrapper}>
      <Link href="/">
        <Image src={logo_svg} alt="로고" width={210} height={40} />
      </Link>
      <p className={styles.logo_text}>
        {text}
        <Link href="/signup" className={styles.link_text}>{linkText}</Link>
      </p>
    </div>
  );
};

export default LogoText;
