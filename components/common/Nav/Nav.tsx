import Link from "next/link";
import Image from "next/image";
import { UserInterface } from "@/types/types";
import * as S from "./Nav.style";
import useAuth from "@/hooks/useAuth";

export default function Nav({ isSticky }: { isSticky?: boolean }) {
  const { user, logout } = useAuth();
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
        {user === null ? (
          <S.Button>
            <Link href="/signin">로그인</Link>
          </S.Button>
        ) : (
          <S.User>
            <Image
              src={user.image_source || "/assets/Images/no-profile.png"}
              alt="프로필 아이콘 이미지"
              width={20}
              height={20}
            />
            <S.Span>{user.email}</S.Span>
          </S.User>
        )}
      </S.MainDiv>
    </S.Nav>
  );
}
