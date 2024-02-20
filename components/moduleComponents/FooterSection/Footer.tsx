import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  facebook_svg,
  twitter_svg,
  youtube_svg,
  instagram_svg,
} from "@/public/image/index"; // 이미지 모듈 import

export default function Footer() {
  return (
    <footer className={styles.footer_Section}>
      <div className={styles.footer_box}>
        <span className={styles.write}>©codeit - 2023</span>
        <ul className={styles.footer_links}>
          <li>
            <Link className={styles.footer_link} href="../Privacy/privacy.html">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className={styles.footer_link} href="../FAQ/FAQ.html">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className={styles.icon_list}>
          <li>
            <Link
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook_svg}
                alt="facebook 홈페이지로 연결된 facebook 로고"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href={"https://twitter.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={twitter_svg}
                alt="twitter 홈페이지로 연결된 twitter 로고"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.youtube.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={youtube_svg}
                alt="youtube 홈페이지로 연결된 youtube 로고"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram_svg}
                alt="instagram 홈페이지로 연결된 instagram 로고"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
