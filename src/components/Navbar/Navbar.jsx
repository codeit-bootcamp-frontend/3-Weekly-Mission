import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import logoImg from '../../asset/logo.svg';
import NavProfile from './NavProfile';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_USERS, BASE_API_HOST } from '../../constants/api';
import Loading from '../Loading/Loading';

const NavHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px 200px 32px;
  gap: 8px;
  background: #f0f6ff;
  z-index: 1;
  ${(props) =>
    props.$isFolderPage &&
    css`
      position: relative;
    `}
  @media (max-width: 1199px) {
    & {
      padding: 33px max(32px, calc((100vw - 800px) / 2)) 32px;
    }
  }

  @media (max-width: 767px) {
    & {
      padding: 18px 32px 17px;
    }
  }
`;
const HeaderBox = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
`;
const HeaderLogo = styled.img`
  width: 133px;
  height: 24px;
  cursor: pointer;
`;
const HeaderLogin = styled(Link)`
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;
const HeaderLoginSpan = styled.span`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
`;

export default function Navbar() {
  const location = useLocation();
  const isFolderPage = location.pathname === '/folder';
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImg, setUserProfileImg] = useState(null);
  const [condition, setCondition] = useState('noData');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCondition('loading');
    const getUserInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, `${API_USERS}/1`);
        setUserEmail(result.data[0].email);
        setUserProfileImg(result.data[0].image_source);
        setCondition('getInfoSuccess');
      } catch (e) {
        setErrorMessage(e.message);
        setCondition('error');
      }
    };
    getUserInfo();
  }, []);

  return (
    <NavHeader $isFolderPage={isFolderPage}>
      <HeaderBox>
        <Link to="/">
          <HeaderLogo src={logoImg} alt="logo" />
        </Link>
        {
          {
            loading: <Loading />,
            getInfoSuccess: (
              <NavProfile
                userEmail={userEmail}
                userProfileImg={userProfileImg}
              />
            ),
            error: errorMessage,
            noData: (
              <HeaderLogin to="/">
                <HeaderLoginSpan>로그인</HeaderLoginSpan>
              </HeaderLogin>
            ),
          }[condition]
        }
      </HeaderBox>
    </NavHeader>
  );
}
