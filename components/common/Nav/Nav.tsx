import Link from "next/link";
import Image from "next/image";
import { UserInterface } from "@/types/types";
import * as S from "./Nav.style";

export default function Nav({
  profile,
  isSticky,
}: {
  profile?: UserInterface;
  isSticky?: boolean;
}) {
  return (
    <S.Nav isSticky={isSticky}>
      <S.MainDiv>
        <Link href="/">
          <Image
            src={"/assets/Icons/logo.svg"}
            alt="로고 아이콘 이미지"
            width={133}
            height={52}
            priority={true}
          />
        </Link>
        {!profile ? (
          <S.Button>
            <Link href="./">로그인</Link>
          </S.Button>
        ) : (
          <S.User>
            <Image
              src={profile.image_source || "/assets/Images/no-profile.png"}
              alt="프로필 아이콘 이미지"
              width={20}
              height={20}
            />
            <S.Span>{profile.email}</S.Span>
          </S.User>
        )}
      </S.MainDiv>
    </S.Nav>
  );
}
