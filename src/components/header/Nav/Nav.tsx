import Profile from '../Profile/Profile';
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useRecoilState } from 'recoil';
import { userState } from '@/src/state/atoms';
import { useEffect } from 'react';
import { getUserByAccessToken } from '@/pages/api/api';

const cn = classNames.bind(styles);

interface Props {
  className?: string | undefined;
}

export default function Nav({ className = '' }: Props) {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) return;
    async function getUser() {
      const { data } = await getUserByAccessToken(
        localStorage.getItem('accessToken')
      );
      if (!data) return;
      setUser(data[0]);
    }

    getUser();
  }, []);

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
        <Link className={cn('cta', 'cta-short')} href="/signin">
          <span>로그인</span>
        </Link>
      )}
    </nav>
  );
}
