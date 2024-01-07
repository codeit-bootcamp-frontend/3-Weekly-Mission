import { Link } from 'react-router-dom';
import styled from 'styled-components';
import facebookImg from '../../asset/akar-icons_facebook-fill.svg';
import twitterImg from '../../asset/akar-icons_twitter-fill.svg';
import youtubeImg from '../../asset/akar-icons_youtube-fill.svg';
import instagramImg from '../../asset/ant-design_instagram-filled.svg';

const FooterContainer = styled.footer`
  display: flex;
  height: 220px;
  padding: 60px 0 0;
  @media (max-width: 767px) {
    & {
      height: 200px;
      padding: 40px 0 0;
    }
  }
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  padding: 32px 104px 64px 104px;
  background: #111322;
  @media (max-width: 767px) {
    & {
      padding: 32px 32px 64px;
    }
  }
`;
const FooterContents = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  max-width: 1712px;
`;
const FooterContentsBox = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  @media (max-width: 767px) {
    & {
      display: grid;
      grid-template: 1fr 1fr / auto 1fr;
      row-gap: 60px;
    }
  }
`;
const FooterCopyRight = styled.div`
  @media (max-width: 767px) {
    & {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;
const FooterCodeit = styled.span`
  color: #676767;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;
const FooterPolicyText = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  gap: 30px;
  @media (max-width: 767px) {
    .footer-policy-text {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }
`;
const FooterText = styled(Link)`
  color: #cfcfcf;
  cursor: pointer;
`;
const FooterLogo = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 767px) {
    & {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: right;
    }
  }
`;
const FooterLogoImg = styled.img`
  cursor: pointer;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterContents>
          <FooterContentsBox>
            <FooterCopyRight>
              <FooterCodeit>©codeit - 2023</FooterCodeit>
            </FooterCopyRight>
            <FooterPolicyText>
              <FooterText to="/privacy">Privacy Policy</FooterText>
              <FooterText to="/faq">FAQ</FooterText>
            </FooterPolicyText>
            <FooterLogo>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FooterLogoImg src={facebookImg} alt="facebook" />
              </Link>
              <Link to="https://twitter.com/" target="_blank" rel="noreferrer">
                <FooterLogoImg src={twitterImg} alt="twitter" />
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FooterLogoImg src={youtubeImg} alt="youtube" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FooterLogoImg src={instagramImg} alt="instagram" />
              </Link>
            </FooterLogo>
          </FooterContentsBox>
        </FooterContents>
      </FooterBox>
    </FooterContainer>
  );
}
