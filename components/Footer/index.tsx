import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles["linkbrary-footer"]}>
      <div className={styles["footer-copy"]}>
        <span>©codeit - 2023</span>
      </div>
      <div className={styles["footer-links"]}>
        <Link href="privacy.html">Privacy Policy</Link>
        <Link href="faq.html">FAQ</Link>
      </div>
      <div className={styles["footer-sns"]}>
        <Link href="https://www.facebook.com/" target="_blank">
          <Image
            src="/assets/facebook.svg"
            alt="facebook 로고"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <Image
            src="/assets/twitter.svg"
            alt="twitter 로고"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <Image
            src="/assets/youtube.svg"
            alt="youtube 로고"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image
            src="/assets/instagram.svg"
            alt="instagram 로고"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
