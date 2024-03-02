import { ROUTE } from '@/util/constant';
import { TEXT } from './constant';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterCopyright>{TEXT.codeit}</FooterCopyright>
        <FooterLinks>
          <Link href={ROUTE.개인정보처리방침}>{TEXT.privarcyPolicy}</Link>
          <Link href={ROUTE.FAQ}>{TEXT.faq}</Link>
        </FooterLinks>
        <FooterSNS>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/facebook.svg"
              width={20}
              height={20}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/twitter.svg"
              width={20}
              height={20}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/youtube.svg"
              width={20}
              height={20}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/instagram.svg"
              width={20}
              height={20}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </Link>
        </FooterSNS>
      </FooterItems>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-items: center;
  width: 100%;
  height: 16rem;
  background-color: var(--black);
  margin-top: 6rem;
`;

const FooterItems = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    'links sns'
    '. .' 1fr
    'copyright .';
  width: 100%;
  padding: 3.2rem;

  @media (min-width: 768px) {
    grid-template: 'copyright links sns';
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;

const FooterCopyright = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const FooterLinks = styled.div`
  grid-area: links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

const FooterSNS = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
`;
