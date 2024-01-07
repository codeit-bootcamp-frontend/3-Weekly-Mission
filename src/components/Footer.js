import "./Footer.css";

const Footer = function () {
  return (
    <div className="footer">
      <div class="footer-box">
        <span class="copyright">©codeit - 2023</span>
        <div class="footer-links">
          <a class="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a class="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div class="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/img/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/img/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/img/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/img/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
