import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const SNS = [
  {
    href: "https://www.facebook.com",
    src: "/facebook_icon.svg",
    alt: "facebook-icon",
  },
  {
    href: "https://twitter.com",
    src: "/twitter_icon.svg",
    alt: "twitter-icon",
  },
  {
    href: "https://www.youtube.com",
    src: "/youtube_icon.svg",
    alt: "youtube-icon",
  },
  {
    href: "https://www.instagram.com",
    src: "/instagram_icon.svg",
    alt: "instagram-icon",
  },
];

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
        {SNS.map((sns, idx) => (
          <Link
            key={idx}
            href={sns.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={20} height={20} src={sns.src} alt={sns.alt} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
