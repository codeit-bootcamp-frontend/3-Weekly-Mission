import React from "react";
import imageData from "../../utils/imageData";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const SNS_URL = {
    YOUTUBE: "https://www.youtube.com/",
    FACEBOOK: "https://facebook.com/",
    TWITTER: "https://twitter.com/",
    INSTAGRAM: "https://www.instagram.com/",
  };

  return (
    <footer className="footer">
      <span>Codeit-2023</span>
      <ul className="links">
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <ul className="sns">
        <li>
          <Link to={SNS_URL.FACEBOOK} rel="noreferrer noopener" target="_blank">
            <img src={imageData.facebookIcon} alt="페이스북 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link to={SNS_URL.TWITTER} rel="noreferrer noopener" target="_blank">
            <img src={imageData.twitterIcon} alt="트위터 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link to={SNS_URL.YOUTUBE} rel="noreferrer noopener" target="_blank">
            <img src={imageData.youtubeIcon} alt="유튜브 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            to={SNS_URL.INSTAGRAM}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={imageData.instagramIcon} alt="인스타그램 이동 아이콘" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
