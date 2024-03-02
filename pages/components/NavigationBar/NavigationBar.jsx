import Image from 'next/image';
import { ROUTE } from '../../../util/constant';
import Profile from './Profile/Profile';
import styled from 'styled-components';
import Link from 'next/link';
import { useGetUser } from '@/hooks/useGetUser';

export default function NavigationBar() {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <NavContainer>
      <NavItems>
        <Link href={ROUTE.랜딩}>
          <NavImage
            src="/images/linkbrary.svg"
            width={133}
            height={24}
            alt="Linkbrary 서비스 로고"
          />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href={ROUTE.로그인}>
            <NavSignin>로그인</NavSignin>
          </Link>
        )}
      </NavItems>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  width: 100%;
  background-color: var(--light-blue);
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1200px) {
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

const NavImage = styled(Image)`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

const NavSignin = styled.span`
  display: inline-block;
  width: 8rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  border-radius: 0.8rem;
  background: linear-gradient(91deg, var(--primary) 0.12% #6ae3fe 101.84%);
  color: var(--gray-light);

  @media (min-width: 768px) {
    width: 12.8rem;
    padding: 1.6rem 0;
    font-size: 1.8rem;
  }
`;
