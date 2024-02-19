import Container from "@/container/PageContainer";
import styles from "./Footer.module.css";
import SnsButton from "../button/imageButton/SnsButton";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.info}>@codeit - 2023</div>
        <div className={styles.links}>
          <Link className="footer-link" href="privacy.html">
            Privacy Policy
          </Link>
          <Link className="footer-link" href="faq.html">
            FAQ
          </Link>
        </div>
        <div className={styles.sns}>
          <SnsButton
            href="https://www.facebook.com/"
            src="/assets/facebook.svg"
            alt="페이스북 아이콘"
          />
          <SnsButton
            href="https://twitter.com/"
            src="/assets/twitter.svg"
            alt="트위터 아이콘"
          />
          <SnsButton
            href="https://www.youtube.com/"
            src="/assets/youtube.svg"
            alt="유튜브 아이콘"
          />
          <SnsButton
            href="https://www.instagram.com/"
            src="/assets/instagram.svg"
            alt="인스타그램 아이콘"
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
