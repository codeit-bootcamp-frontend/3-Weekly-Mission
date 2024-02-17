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
              <Image
                className={styles.snsIcon}
                src="/svgs/icon-facebook-fill.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.snsIcon}
                src="/svgs/icon-twitter-fill.svg"
                alt="twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={20}
                height={20}
                className={styles.snsIcon}
                src="/svgs/icon-youtube-fill.svg"
                alt="youtube"
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={20}
                height={20}
                className={styles.snsIcon}
                src="/svgs/icon-instagram-fill.svg"
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
