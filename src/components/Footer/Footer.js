import "./Footer.css";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import instagram from "../../images/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div className="footer-box-contents">
          <div className="footer-box-contents-logo">
            <span>@codeia - 2023</span>
          </div>
          <div className="footer-box-contents-links">
            <a href="./privacy">Privacy Policy</a>
            <a href="./faq">FAQ</a>
          </div>
          <div className="footer-box-contents-sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="페이스북 링크 이미지" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="트위터 링크 이미지" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="유튜브 링크 이미지" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="인스타그램 링크 이미지" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
