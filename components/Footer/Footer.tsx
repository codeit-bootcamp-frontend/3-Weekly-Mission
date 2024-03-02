import styles from "./Footer.module.css";
import youtubeIcon from "../../public/youtube.png";
import instagramIcon from "../../public/instagram.png";
import twitterIcon from "../../public/twitter.png";
import facebookIcon from "../../public/facebook.png";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_company}>ⓒcodeit - 2023</div>
      <div className={styles.footer_center}>
        <a href="/privacy">privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className={styles.sns}>
        <a href="facebook.com" target="_blank">
          <Image src={facebookIcon} alt="페이스북 로고" />
        </a>
        <a href="twitter.com" target="_blank">
          <Image src={twitterIcon} alt="트위터 로고" />
        </a>
        <a href="youtube.com" target="_blank">
          <Image src={youtubeIcon} alt="유튜브 로고" />
        </a>
        <a href="instagram.com" target="_blank">
          <Image src={instagramIcon} alt="인스타그램 로고" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
