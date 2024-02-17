import { useState, useEffect } from 'react';
import { getUserSample, getUser } from '@/pages/api/api';
import styles from './styles.module.css';

export const Header = ({ isSticky }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData;
        if (window.location.pathname === '/shared') {
          userData = await getUserSample();
        } else if (window.location.pathname === '/folder') {
          userData = await getUser();
        }
        setUser(userData?.data[0] || {});
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <nav className={styles.nav}>
        <a href="/">
          <img
            className={styles['nav__icon']}
            src="/images/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </a>
        {user.email ? (
          <div className={styles['nav__profile']}>
            <img src={user.image_source} width="28" alt="프로필 이미지" />
            <div className={styles['nav__profile--user-email']}>
              {user.email}
            </div>
          </div>
        ) : (
          <a className={styles['nav__button--login']} href="/signin">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};
