import styles from './Footer.module.css';
import facebookImg from '@/public/faceBook.svg';
import twitterImg from '@/public/twtter.svg';
import youtubeImg from '@/public/youtube.svg';
import instagramImg from '@/public/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSon}>
        <div className={styles.footerSonSon}>
          <div className={styles.footLeft}>©codeit - 2023</div>
          <div className={styles.footCenter}>
            <Link href="./privacy/privacy.html">Privacy Policy</Link>
            <Link href="./faq/faq.html">FAQ</Link>
          </div>
          <div className={styles.footRight}>
            <Link rel="noreferrer" href="http://faceboom.com" target={'_blank'}>
              <Image src={facebookImg} alt="facebook-icon" />
            </Link>
            <Link
              rel="noreferrer"
              href="https://twitter.com/?lang=ko"
              target="_blank"
            >
              <Image src={twitterImg} alt="twitter-icon" />
            </Link>
            <Link
              rel="noreferrer"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <Image src={youtubeImg} alt="youTube-icon" />
            </Link>
            <Link
              rel="noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Image src={instagramImg} alt="insta-icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
