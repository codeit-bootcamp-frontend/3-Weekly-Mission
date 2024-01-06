import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';

const FooterWrap = styled.footer`
  box-sizing: border-box;
  padding: 32px 104px 64px;
  background: #111322;

  @media (max-width: 767px) {
    padding: 32px;
  }
`;

const FooterContainer = styled.footer`
  max-width: 1712px;
  display: grid;
  grid-template-areas: 'codeit privacy-policy-and-faq link';
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-areas:
      'privacy-policy-and-faq link'
      'codeit empty';
    align-items: start;
  }
`;

const FooterFont = css`
  color: #676767;
  font-family: Abel;
  font-size: 16px;
`;

const FooterCodeit = styled.div`
  ${FooterFont}
  grid-area: codeit;
`;

const FooterPrivacyPolicyAndFaq = styled.div`
  ${FooterFont}
  grid-area: privacy-policy-and-faq;
  display: flex;
  gap: 30px;

  Link {
    ${FooterFont}
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }
`;

const FooterLink = styled.div`
  ${FooterFont}
  grid-area: link;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterCodeit>©codeit - 2023</FooterCodeit>
        <FooterPrivacyPolicyAndFaq>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </FooterPrivacyPolicyAndFaq>
        <FooterLink className="footer-font footer-link">
          <Link to="https://www.facebook.com" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/images/facebook_icon.svg`} alt="페이스북 링크 아이콘" />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/images/twitter_icon.svg`} alt="트위터 링크 아이콘" />
          </Link>
          <Link to="https://www.youtube.com" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/images/youtube_icon.svg`} alt="유튜브 링크 아이콘" />
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/images/instagram_icon.svg`} alt="인스타그램 링크아이콘" />
          </Link>
        </FooterLink>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
