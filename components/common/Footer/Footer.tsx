import Image from "next/image";
import Link from "next/link";
import * as S from "./Footer.style";

export default function Footer() {
  const sns = [
    {
      name: "facebook",
      component: (
        <Image
          src={"/assets/Icons/home-facebook.svg"}
          alt="페이스북 아이콘 이미지"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "twitter",
      component: (
        <Image
          src={"/assets/Icons/home-twitter.svg"}
          alt="트위터 아이콘 이미지"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "youtube",
      component: (
        <Image
          src={"/assets/Icons/home-youtube.svg"}
          alt="유튜브 아이콘 이미지"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "instagram",
      component: (
        <Image
          src={"/assets/Icons/home-instagram.svg"}
          alt="인스타그램 아이콘 이미지"
          width={20}
          height={20}
        />
      ),
    },
  ];

  return (
    <S.Footer>
      <S.Logo>@Codeit - 2023</S.Logo>
      <S.Links>
        <Link href="./">Privacy Policy </Link>
        <Link href="./">FAQ</Link>
      </S.Links>
      <S.SNS>
        {sns.map((icon) => {
          let path = `https://www.${icon.name}.com/`;
          return (
            <Link
              href={path}
              target="_blank"
              rel="noreferrer noopener"
              key={icon.name}
            >
              {icon.component}
            </Link>
          );
        })}
      </S.SNS>
    </S.Footer>
  );
}
