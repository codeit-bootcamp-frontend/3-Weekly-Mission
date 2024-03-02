import Link from "next/link";
import Image from "next/image";
import styles from "./SocialSignBox.module.css";

interface Props {
  text: string;
}
export default function SocialSignBox({ text }: Props) {
  return (
    <div className={styles.socialLoginBox}>
      <span className={styles.socialLoginText}>{text}</span>
      <div className={styles.socialIcons}>
        <Link href="https://www.google.com/">
          <span className={styles.socialIcon}>
            <Image fill src="svgs/google-icon.svg" alt="logo" />
          </span>
        </Link>
        <Link href="https://www.kakaocorp.com/page/">
          <span className={styles.socialIcon}>
            <Image fill src="svgs/kakao-icon.svg" alt="logo" />
          </span>
        </Link>
      </div>
    </div>
  );
}
