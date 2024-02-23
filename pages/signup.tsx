/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useState } from "react";
import CtaButton, { CTAButton } from "@/components/CtaButton/CtaButton";
import SignInput from "@/components/SignInput/SignInput";
import SocialSignBox from "@/components/SocialSignBox/SocialSignBox";
import { logoImg } from "@/public/img";
import { NavbarUserInfo } from "@/types/userType";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

interface Props {
  user: NavbarUserInfo;
}

export default function signUp({ user }: Props) {
  const router = useRouter();
  if (user) {
    router.push("/folder");
  }
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordRepeatValue, setPasswordRepeatValue] = useState("");

  return (
    <Wrapper>
      <LogoContainer>
        <Image
          width={210}
          height={38}
          src={logoImg}
          alt="홈으로가는 로고 이미지"
        />
        <Paragraph>
          이미 회원이신가요?
          <SignInLink href={"/signin"}>로그인 하기</SignInLink>
        </Paragraph>
      </LogoContainer>
      <Form>
        <SignInput
          type="email"
          value={emailValue}
          setValue={setEmailValue}
          placeholder="이메일을 입력해주세요."
          labelName="이메일"
        />
        <SignInput
          type="password"
          value={passwordValue}
          setValue={setPasswordValue}
          placeholder="비밀번호를 입력해주세요."
          labelName="비밀번호"
        />
        <SignInput
          type="password"
          value={passwordRepeatValue}
          setValue={setPasswordRepeatValue}
          placeholder="비밀번호를 입력해주세요."
          labelName="비밀번호 확인"
        />
        <CtaButton CTAButtonStyle={Button} type="submit">
          로그인
        </CtaButton>
      </Form>
      <SocialSignBox text="다른 방식으로 가입하기" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 238px auto 253px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 768px) {
    margin: 120px auto 233px;
    padding: 0 32px;
    max-width: 380px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  line-height: 24px;
  font-family: Pretendard;
`;

const SignInLink = styled(Link)`
  color: #6d6afe;
  border-bottom: 2px solid;
  position: relative;
  top: -4px;
  margin-left: 8px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled(CTAButton)`
  width: 100%;
  padding: 16px 20px;
  margin-top: 6px;
  margin-bottom: 2px;
`;
