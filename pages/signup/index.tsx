import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import getCheckEmail from "@/api/getCheckEmail";
import getSignUp from "@/api/getSignUp";
import SignForm from "@/components/sign/SignForm/SignForm";
import useSignValid from "@/hooks/useSignValid";
import * as S from "./SignUpPage.style";
import Input from "@/components/sign/Input/Input";
import useAuth from "@/hooks/useAuth";

export default function SignUpPage() {
  const router = useRouter();
  const { inputValue, onChange, existError } = useSignValid("signup");
  const [isDuplicated, setIsDuplicated] = useState(false);
  const {
    email: emailValue,
    password: passwordValue,
    passwordAgain: passwordAgainValue,
  } = inputValue;
  const { user, login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsDuplicated(false);
    if (passwordValue !== passwordAgainValue) {
      return;
    }
    try {
      const { data } = await getSignUp(emailValue, passwordValue);
      await login(emailValue, passwordValue);
      router.push("/folder");
    } catch {
      return;
    }
  };

  return (
    <>
      <SignForm type="signup">
        <S.Form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
            value={emailValue}
            existError={isDuplicated || existError.email.existError}
            errorMessage={
              isDuplicated
                ? "중복된 이메일입니다!"
                : existError.email.errorMessage
            }
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={onChange}
            value={passwordValue}
            existError={existError.password.existError}
            errorMessage={existError.password.errorMessage}
          />

          <Input
            id="passwordAgain"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            onChange={onChange}
            value={passwordAgainValue}
            existError={existError.passwordAgain.existError}
            errorMessage={existError.passwordAgain.errorMessage}
          />
          <S.Button>회원가입</S.Button>
        </S.Form>
      </SignForm>
    </>
  );
}
