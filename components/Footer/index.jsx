import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <span className={styles['footer__codeit']}>©codeit - 2023</span>
        <div className={styles['footer__links']}>
          <a href="incomplete/privacy-policy.html" target="_blank">
            Privacy Policy
          </a>
          <a href="incomplete/FAQ.html" target="_blank">
            FAQ
          </a>
        </div>
        <div className={styles['footer__sns']}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/images/facebook-icon.svg" alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="/images/twitter-icon.svg" alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="/images/youtube-icon.svg" alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/images/instagram-icon.svg" alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
};
