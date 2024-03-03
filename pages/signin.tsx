/* eslint-disable react-hooks/rules-of-hooks */
import SignInput from "@/components/SignInput/SignInput";
import { logoImg } from "@/public/img";
import { NavbarUserInfo } from "@/types/userType";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import CtaButton from "@/components/CtaButton/CtaButton";
import { CTAButton } from "@/components/CtaButton/CtaButton";
import SocialSignBox from "@/components/SocialSignBox/SocialSignBox";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  checkEmptyValue,
  emailValidator,
  passwordValidator,
} from "@/utils/signValidator";
import { ChangeEvent } from "react";
import axios from "@/apis/axios";
import { EMAIL, PASSWORD } from "@/constants/sign";
import { postSignIn } from "@/apis/user";

interface Props {
  user: NavbarUserInfo;
}

export default function SignInPage({ user }: Props) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (user || token) {
      router.push("/folder");
    }
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const changeMessage = (
    e: ChangeEvent<HTMLInputElement>,
    registerName: string
  ) => {
    if (e.target.value !== "") {
      return;
    }
    const nextMessage = checkEmptyValue(registerName);
    setError(registerName, { type: "custom", message: nextMessage });
  };

  const successSubmit = async (data: object) => {
    const res = await postSignIn(data);
    if (res.status === 200) {
      router.push("/folder");
      return;
    }
    setError(EMAIL, {
      type: "custom",
      message: "이메일을 확인해주세요.",
    });
    setError(PASSWORD, {
      type: "custom",
      message: "비밀번호를 확인해주세요",
    });
  };

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
          회원이 아니신가요?
          <SignUpLink href={"/signup"}>회원가입하기</SignUpLink>
        </Paragraph>
      </LogoContainer>
      <Form
        onSubmit={handleSubmit((data) =>
          successSubmit(JSON.parse(JSON.stringify(data)))
        )}
      >
        <SignInput
          type={EMAIL}
          placeholder="이메일을 입력해주세요."
          labelName="이메일"
          register={register}
          registerName={EMAIL}
          validator={emailValidator}
          errorMessage={errors.email?.message?.toString() || ""}
          changeMessage={changeMessage}
        />
        <SignInput
          type={PASSWORD}
          placeholder="비밀번호를 입력해주세요."
          labelName="비밀번호"
          register={register}
          registerName={PASSWORD}
          validator={passwordValidator}
          errorMessage={errors.password?.message?.toString() || ""}
          changeMessage={changeMessage}
        />
        <CtaButton
          CTAButtonStyle={Button}
          type="submit"
          disabled={isSubmitting}
        >
          로그인
        </CtaButton>
      </Form>
      <SocialSignBox text="소셜로그인" />
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

const SignUpLink = styled(Link)`
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
