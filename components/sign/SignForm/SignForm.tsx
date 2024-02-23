import { ReactNode } from "react";
import * as S from "./SignForm.style";
import Link from "next/link";
import SnsSignForm from "../SnsSignForm/SnsSignForm";

type signType = "signin" | "signup";

const SIGNIN = {
  type: "signin",
  description: "회원이 아니신가요?",
  span: "회원가입 하기",
  sns: "소셜 로그인",
  url: "/signup",
};
const SIGNUP = {
  type: "signup",
  description: "이미 회원이신가요?",
  span: "로그인 하기",
  sns: "다른 방식으로 가입하기",
  url: "/signin",
};

export default function SignForm({
  type = "signin",
  children,
}: {
  type: signType;
  children: ReactNode;
}) {
  const pageType = type === "signin" ? SIGNIN : SIGNUP;

  return (
    <S.MainDiv>
      <S.SignBox>
        <S.Header>
          <Link href="/">
            <S.ImageBox>
              <S.Image
                src={"/assets/Icons/logo.svg"}
                alt="로고 아이콘 이미지"
              />
            </S.ImageBox>
          </Link>
          <S.Description>
            {pageType.description}
            <S.Span>
              <Link href={pageType.url}>{pageType.span}</Link>
            </S.Span>
          </S.Description>
        </S.Header>
        <S.Form>{children}</S.Form>
        <SnsSignForm label={pageType.sns} />
      </S.SignBox>
    </S.MainDiv>
  );
}
