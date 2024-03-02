import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "@/public/img";
import Image from "next/image";
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
            <Image src={facebookIcon} alt="페이스북 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.TWITTER}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image src={twitterIcon} alt="트위터 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.YOUTUBE}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image src={youtubeIcon} alt="유튜브 이동 아이콘" />
          </Link>
        </li>
        <li>
          <Link
            href={SNS_URL.INSTAGRAM}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image src={instagramIcon} alt="인스타그램 이동 아이콘" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
