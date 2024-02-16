import imageData from "@/public/imageData";

import Link from "next/link";

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
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
      <ul className="sns">
        <li>
          <Link
            href={SNS_URL.FACEBOOK}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={imageData.facebookIcon.src} alt="페이스북 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.TWITTER}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={imageData.twitterIcon.src} alt="트위터 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.YOUTUBE}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={imageData.youtubeIcon.src} alt="유튜브 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.INSTAGRAM}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              src={imageData.instagramIcon.src}
              alt="인스타그램 이동 아이콘"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
