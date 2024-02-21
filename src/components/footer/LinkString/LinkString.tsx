import Link from 'next/link';
import styles from './LinkString.module.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  className: string;
}

export default function LinkString({ className }: Props) {
  return (
    <div className={cn(className)}>
      <Link className={cn('footer-link')} href="privacy.html">
        Privacy Policy
      </Link>
      <Link className={cn('footer-link')} href="faq.html">
        FAQ
      </Link>
    </div>
  );
}
