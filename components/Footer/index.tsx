import styles from './styles.module.css';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

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
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
