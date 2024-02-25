import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles["footer-links"]}>
          <Link className={styles["footer-link"]} href="/">
            Privacy Policy
          </Link>
          <Link className={styles["footer-link"]} href="/">
            FAQ
          </Link>
        </div>
        <div className={styles.sns}>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <Image fill alt="facefook" src="/assets/facebook.svg" />
            </div>
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <Image fill alt="twitter" src="/assets/twitter.svg" />
            </div>
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <Image fill alt="youtube" src="/assets/youtube.svg" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <Image fill alt="instagram" src="/assets/instagram.svg" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
