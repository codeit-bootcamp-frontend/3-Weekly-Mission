import Link from "next/link";
import Image from "next/image";
import styles from "./SignForm.module.css";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

interface Props {
  linkDescription: String;
  linkText: String;
  href: Url;
  children?: ReactNode;
}
export default function SignInForm({
  linkDescription,
  linkText,
  href,
  children,
}: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.loginBox}>
        <div className={styles.logoBox}>
          <Link href="/">
            <span className={styles.logo}>
              <Image fill src="svgs/logo.svg" alt="logo" />
            </span>
          </Link>

          <div className={styles.linkBox}>
            <span className={styles.text}>{linkDescription}</span>
            <Link className={styles.linktext} href={href}>
              {linkText}
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
