import styles from './Footer.module.css';
import facebookImg from '@/public/faceBook.svg';
import twitterImg from '@/public/twtter.svg';
import youtubeImg from '@/public/youtube.svg';
import instagramImg from '@/public/instagram.svg';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSon}>
        <div className={styles.footerSonSon}>
          <div className={styles.footLeft}>©codeit - 2023</div>
          <div className={styles.footCenter}>
            <a href="./privacy/privacy.html">Privacy Policy</a>
            <a href="./faq/faq.html">FAQ</a>
          </div>
          <div className={styles.footRight}>
            <a rel="noreferrer" href="http://faceboom.com" target={'_blank'}>
              <Image src={facebookImg} alt="facebook" />
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/?lang=ko"
              target="_blank"
            >
              <Image src={twitterImg} alt="twit" />
            </a>
            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
              <Image src={youtubeImg} alt="youTube" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Image src={instagramImg} alt="insta" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
