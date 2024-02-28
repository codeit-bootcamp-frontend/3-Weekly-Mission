import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import getSignIn from "@/api/getSignIn";
import useSignValid from "@/hooks/useSignValid";
import * as S from "./SignInPage.style";
import SignForm from "@/components/sign/SignForm/SignForm";
import Input from "@/components/sign/Input/Input";

export default function SignInPage() {
  const router = useRouter();
  const { inputValue, onChange, existError } = useSignValid("signin");
  const [wrong, setWrong] = useState(false);
  const {
    email: emailValue,
    password: passwordValue,
    passwordAgain: passwordAgainValue,
  } = inputValue;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (existError.email.existError) {
      return;
    }
    const responseSignin = await getSignIn(emailValue, passwordValue);
    if (!responseSignin) {
      setWrong(true);
      return;
    }
    setWrong(false);
    localStorage.setItem("accessToken", responseSignin.data.accessToken);
    router.push("/folder");
  };

  return (
    <>
      <SignForm type="signin">
        <S.Form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
            value={emailValue}
            existError={wrong || existError.email.existError}
            errorMessage={
              wrong ? "이메일을 확인해 주세요!" : existError.email.errorMessage
            }
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={onChange}
            value={passwordValue}
            existError={wrong || existError.password.existError}
            errorMessage={
              wrong
                ? "비밀번호를 확인해 주세요!"
                : existError.password.errorMessage
            }
          />
          <S.Button>로그인</S.Button>
        </S.Form>
      </SignForm>
    </>
  );
}
