import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <span className={styles['footer__codeit']}>©codeit - 2023</span>
        <div className={styles['footer__links']}>
          <Link href="incomplete/privacy-policy.html" target="_blank">
            Privacy Policy
          </Link>
          <Link href="incomplete/FAQ.html" target="_blank">
            FAQ
          </Link>
        </div>
        <div className={styles['footer__sns']}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/images/facebook-icon.svg"
              alt="페이스북 아이콘"
            />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
            <Image
              width={20}
              height={20}
              src="/images/twitter-icon.svg"
              alt="트위터 아이콘"
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/images/youtube-icon.svg"
              alt="유튜브 아이콘"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/images/instagram-icon.svg"
              alt="인스타그램 아이콘"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
