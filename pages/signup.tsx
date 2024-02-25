/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import CtaButton, { CTAButton } from "@/components/CtaButton/CtaButton";
import SignInput from "@/components/SignInput/SignInput";
import SocialSignBox from "@/components/SocialSignBox/SocialSignBox";
import { logoImg } from "@/public/img";
import { NavbarUserInfo } from "@/types/userType";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  checkEmptyValue,
  emailValidator,
  passwordValidator,
} from "@/utils/signValidator";
import { ChangeEvent } from "react";
import { SignUpDataType } from "@/types/dataTypes";
import axios from "@/apis/axios";
import { EMAIL, PASSWORD, PASSWORD_REPEAT } from "@/constants/sign";
import { AxiosError } from "axios";

interface Props {
  user: NavbarUserInfo;
}

export default function signUp({ user }: Props) {
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
    formState: { errors },
  } = useForm();

  const checkEmail = async (email: object) => {
    let message = "";
    try {
      const res = await axios.post("check-email", email);
      if (res.status === 200) {
        return;
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError?.response?.status === 409) {
        message = "이미 사용 중인 이메일입니다.";
        return;
      }
      message = "올바른 이메일 주소가 아닙니다.";
    } finally {
      setError(EMAIL, {
        type: "custom",
        message,
      });
    }
  };

  const changeMessage = (
    e: ChangeEvent<HTMLInputElement>,
    registerName: string
  ) => {
    if (e.target.value === "") {
      const nextMessage = checkEmptyValue(registerName);
      setError(registerName, { type: "custom", message: nextMessage });
      return;
    }
    if (registerName !== EMAIL) {
      return;
    }
    checkEmail({ email: e.target.value });
  };
  const successSubmit = async (data: SignUpDataType) => {
    const { email, password, passwordRepeat } = data;
    if (password !== passwordRepeat) {
      setError(PASSWORD_REPEAT, {
        type: "custom",
        message: "비밀번호가 일치하지 않아요.",
      });
      return;
    }
    try {
      const res = await axios.post("sign-up", { email, password });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        router.push("/folder");
      }
    } catch (e) {}
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
          이미 회원이신가요?
          <SignInLink href={"/signin"}>로그인 하기</SignInLink>
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
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          labelName="비밀번호"
          register={register}
          registerName={PASSWORD}
          validator={passwordValidator}
          errorMessage={errors.password?.message?.toString() || ""}
          changeMessage={changeMessage}
        />
        <SignInput
          type={PASSWORD}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          labelName="비밀번호 확인"
          register={register}
          validator={passwordValidator}
          registerName={PASSWORD_REPEAT}
          errorMessage={errors.passwordRepeat?.message?.toString() || ""}
          changeMessage={changeMessage}
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
