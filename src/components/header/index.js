import { useState, useEffect } from 'react';
import { getUserSample, getUser } from '../../api';
import './style.css';

const Header = isSticky => {
  const [user, setUser] = useState({});
  const headerClass = isSticky ? 'header__folder' : 'header';

  useEffect(() => {
    if (location.pathname === '/shared') {
      (async () => {
        const userData = await getUserSample();
        setUser(userData);
      })();
    }
    if (location.pathname === '/folder') {
      (async () => {
        const userData = await getUser();
        setUser(userData?.data[0]);
      })();
    }
  }, []);

  return (
    <header className={headerClass}>
      <nav className="nav">
        <a href="/" className="linkbrary-icon">
          <img src="/logo.svg" alt="홈으로 연결된 Linkbrary 로고"></img>
        </a>
        {user.email ? (
          <div className="header__profile">
            <img src={user.image_source} width="28" alt="프로필 이미지" />
            <div className="user-email">{user.email}</div>
          </div>
        ) : (
          <a className="btn header__btn-login" href="/signin">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
