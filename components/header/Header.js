import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logoImg from '@/public/logo.svg';
import styled from 'styled-components';
import { FetchUserData } from '@/pages/api/UsersAPI';
import Link from 'next/link';
import Image from 'next/image';

const StyledHeader = styled.header`
  position: ${props => (props.$notFixed ? 'static' : 'fixed')};
`;

function Header({ notFixed }) {
  const [userInfo, setUserInfo] = useState();
  const invisible = { display: 'none' };
  const visible = { display: 'inherit' };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await FetchUserData();
      setUserInfo(userData);
    };
    fetchData();
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <StyledHeader $notFixed={notFixed} className={styles.header}>
      <div className={styles.headerSon}>
        <Link href="/">
          <Image src={logoImg} alt="로고" className={styles.logo} />
        </Link>
        <a
          className={styles.loginButton}
          href="./signin/signin.html"
          style={userInfo['data'][0]['id'] !== 1 ? visible : invisible}
        >
          로그인
        </a>
        <div
          className={styles.userInfo}
          style={userInfo['data'][0]['id'] === 1 ? visible : invisible}
        >
          <Image
            src={userInfo['data'][0]['image_source']}
            alt="profile"
            width={28}
            height={28}
          />
          <h6>{userInfo['data'][0]['email']}</h6>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
