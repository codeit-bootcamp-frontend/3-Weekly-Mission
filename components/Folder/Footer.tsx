/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import Image from "next/image";
import * as S from "./Style";

export default function Footer() {
  return (
    <S.Footer>
      <S.Copyright>@codeit - 2023</S.Copyright>
      <S.FooterLinkBox>
        <S.FooterLink href="/">Privacy Policy</S.FooterLink>
        <S.FooterLink href="/">FAQ</S.FooterLink>
      </S.FooterLinkBox>
      <S.SNS>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/assets/Icons/facebook.svg"}
            alt="페이스북 아이콘 이미지"
          />
        </Link>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/assets/Icons/twitter.svg"} alt="트위터 아이콘 이미지" />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/assets/Icons/youtube.svg"} alt="유튜브 아이콘 이미지" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/assets/Icons/instagram.svg"}
            alt="인스타그램 아이콘 이미지"
          />
        </Link>
      </S.SNS>
    </S.Footer>
  );
}
