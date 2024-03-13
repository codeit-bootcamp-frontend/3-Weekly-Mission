import { useState, useEffect } from 'react';
import { getUser } from '@/api/getData';
import { NextRouter, useRouter } from 'next/router';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/types/Common';

interface Props {
  isSticky: boolean;
}

export const Header = ({ isSticky }: Props) => {
  const router: NextRouter = useRouter();
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            width={133}
            height={24}
            className={styles['nav__icon']}
            src="/images/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </Link>
        {user?.email ? (
          <div className={styles['nav__profile']}>
            <Image
              width={28}
              height={28}
              src={user.image_source}
              alt="프로필 이미지"
            />
            <div className={styles['nav__profile--user-email']}>
              {user.email}
            </div>
          </div>
        ) : (
          <Link className={styles['nav__button--login']} href="/signin">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};
