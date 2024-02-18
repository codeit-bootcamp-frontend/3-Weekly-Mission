import styles from "./Footer.module.css";
import facebookIcon from "../public/facebook_icon.svg";
import twitterIcon from "../public/twitter_icon.svg";
import youtubeIcon from "../public/youtube_icon.svg";
import instagramIcon from "../public/instagram_icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["brand-year"]}>ⓒcodeit - 2023</div>
      <div className={styles["policy-and-faq"]}>
        <Link className={styles["privacy"]} href="documents/privacy.html">
          Privacy Policy
        </Link>
        <Link className={styles.faq} href="documents/faq.html">
          FAQ
        </Link>
      </div>
      <div className={styles["sns-link"]}>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={facebookIcon} alt="facebook-icon" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twitterIcon} alt="twitter-icon" />
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={youtubeIcon} alt="youtube-icon" />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagramIcon} alt="instagram-icon" />
        </Link>
      </div>
    </footer>
  );
}
