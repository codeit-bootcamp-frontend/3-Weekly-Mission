import Link from 'next/link';
import styles from './LinkString.module.css';

interface Props {
  className: string;
}

export default function LinkString({ className }: Props) {
  return (
    <div className={styles[className]}>
      <Link className={styles['footer-link']} href="privacy.html">
        Privacy Policy
      </Link>
      <Link className={styles['footer-link']} href="faq.html">
        FAQ
      </Link>
    </div>
  );
}