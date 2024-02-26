import Profile from '../Profile/Profile';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { User } from '@/pages/folder';

const cn = classNames.bind(styles);

interface Props {
  className?: string | undefined;
  user?: User;
}

export default function Nav({ className = '', user }: Props) {
  return (
    <nav className={cn(className, 'nav')}>
      <Link href="/">
        <div className={cn('logo')}>
          <Image
            fill
            src="/images/logo.svg"
            alt="Linkbrary 로고"
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>
      {user ? (
        <Profile user={user} />
      ) : (
        <Link className={cn('cta', 'cta-short')} href="signin.html">
          <span>로그인</span>
        </Link>
      )}
    </nav>
  );
}
