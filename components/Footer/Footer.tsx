import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerFrame}>
        <div className={styles.footerBar}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>©codeit - 2023</span>
            <div className={styles.footerPolicy}>
              <Link className={styles.footerText} href="/privacy">
                Privacy Policy
              </Link>
              <Link className={styles.footerText} href="/faq">
                FAQ
              </Link>
            </div>
          </div>
          <div className={styles.footerRight}>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.snsIcon}>
                <Image fill src="/svgs/icon-facebook-fill.svg" alt="facebook" />
              </span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.snsIcon}>
                <Image fill src="/svgs/icon-twitter-fill.svg" alt="twitter" />
              </span>
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.snsIcon}>
                <Image fill src="/svgs/icon-youtube-fill.svg" alt="youtube" />
              </span>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.snsIcon}>
                <Image
                  fill
                  src="/svgs/icon-instagram-fill.svg"
                  alt="instagram"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
