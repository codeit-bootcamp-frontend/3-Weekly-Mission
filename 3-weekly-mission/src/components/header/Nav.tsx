import { useState, useEffect } from 'react';
import { getUser, getUserById } from '@/pages/api/api';
import Profile from './Profile';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  margin: 0 auto;
  height: 9.4rem;
  padding: 0 20rem;
  position: static;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &.not-fixed {
    position: fixed;
  }

  &.not-fixed {
    background: var(--linkbrary-bg);
  }
`;

const LogoContainer = styled.div`
  width: 13.3rem;
  height: 2.4rem;
  position: relative;
`;

const CtaButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;

  &.cta-short {
    width: 12.8rem;
  }
`;

const ResponsiveStyles = styled.div`
  @media (max-width: 767px) {
    .nav {
      height: 6.3rem;
      padding: 0 3.2rem;
    }

    .nav .logo {
      width: 8.8667rem;
      height: 1.6rem;
    }

    .user .email {
      display: none;
    }

    .cta {
      height: 3.7rem;
      font-size: 1.4rem;
    }

    .cta-short {
      width: 8rem;
    }

    .footer-box {
      display: grid;
      grid-template-areas:
        'links sns'
        'copyright .';
      row-gap: 6rem;
      padding: 0 3.2rem;
    }

    .copyright {
      grid-area: copyright;
      font-weight: 400;
    }

    .footer-links {
      grid-area: links;
    }

    .footer-link {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  @media (max-width: 1199px) {
    .nav {
      padding: 0 calc((100% - 78.32rem) / 2);
    }
  }

  @media (max-width: 864px) {
    .nav {
      padding: 0 3.2rem;
    }
  }
`;

export default function Nav({ className = '', setUserId, id }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function applyGetUser() {
      const nextUser = await getUser();
      if (!nextUser) return;
      setUser(nextUser);
    }

    async function applyGetUserById(id: number) {
      const nextUser = await getUserById(id);
      if (!nextUser) return;
      setUser(nextUser.data[0]);
      if (setUserId) {
        setUserId(nextUser.data[0].id);
      }
    }

    if (id) applyGetUserById(id);
    else applyGetUser();
  }, [id, setUserId]);

  return (
    <NavContainer>
      <Link href="/">
        <LogoContainer>
          <Image
            fill
            src="/images/logo.svg"
            alt="Linkbrary 로고"
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </LogoContainer>
      </Link>
      {user ? (
        <Profile user={user} />
      ) : (
        <Link
          href="signin.html"
        >
          <span>로그인</span>
        </Link>
      )}
      <ResponsiveStyles />
    </NavContainer>
  );
}
