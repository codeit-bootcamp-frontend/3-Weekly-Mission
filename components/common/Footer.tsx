import classNames from "classnames/bind";
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

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx("brand-year")}>ⓒcodeit - 2023</div>
      <div className={cx("policy-and-faq")}>
        <Link className={cx("privacy")} href="documents/privacy.html">
          Privacy Policy
        </Link>
        <Link className={cx("faq")} href="documents/faq.html">
          FAQ
        </Link>
      </div>
      <div className={cx("sns-link")}>
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
