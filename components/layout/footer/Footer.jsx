import React from 'react';
import FooterIcon from "../../Forms/FooterIcon";
import * as S from "./Footer.style";

function Footer() {
  return (
      <S.Footer>

        <div className="footer-area">
          <div className="footer-box">
            <p className="company footer-grid-3">
              ©codeit - 2023
            </p>
            <div className="footer-text footer-grid-1">
              <p>
                <a href="privacy.html">Privacy Policy</a>
              </p>
              <p>
                <a href="faq.html">FAQ</a>
              </p>
            </div>
            <div className="icon-container footer-grid-2">
              <FooterIcon value="facebook"/>
              <FooterIcon value="twitter"/>
              <FooterIcon value="youtube"/>
              <FooterIcon value="instagram"/>
            </div>
          </div>
        </div>
      </S.Footer>
  );
}

export default Footer;
