/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/Shared.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles["footerBox"]}>
        <span className={styles["copyright"]}>©codeit - 2023</span>
        <div className={styles["footerLinks"]}>
          <Link href="/privacy-policy">
            <span className={styles["footerLink"]}>Privacy Policy</span>
          </Link>
          <Link href="/faq">
            <span className={styles["footerLink"]}>FAQ</span>
          </Link>
        </div>

        <div className={styles["sns"]}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icons/facebook.svg"
              alt="페이스북 아이콘 이미지"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icons/twitter.svg"
              alt="트위터 아이콘 이미지"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icons/youtube.svg"
              alt="유튜브 아이콘 이미지"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icons/instagram.svg"
              alt="인스타그램 아이콘 이미지"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
