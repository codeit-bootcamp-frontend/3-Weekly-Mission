import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import { FormEvent, useId, useState } from "react";
import { signFormDataInterface } from "@/interfaces";
import { URL_DOMAIN } from "@/Constants/Constants";
import getFetch from "@/utils/getFetch";
import { useRouter } from "next/router";
import postFetch from "@/utils/postFetch";

// Think: 제어컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const Form = ({ currentPath }: { currentPath: string }) => {
  const router = useRouter();
  const id = useId();
  const [failSubmit, setFailSubmit] = useState(false);
  const [FormData, setFormData] = useState<signFormDataInterface>(() => {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  });

  const handleInputChange = (data: signFormDataInterface) => {
    setFormData({ ...FormData, ...data });
  };

  // 로그인 버튼 클릭
  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = {
      email: FormData.email,
      password: FormData.password,
    };
    (async () => {
      try {
        const data = await postFetch(URL_DOMAIN, "api/sign-in", body);
        localStorage.setItem("accessToken", await data.data.accessToken);
        return router.push("./folder");
      } catch (error) {
        console.error(error);
      }
    })();
  };

  // 회원가입 버튼 클릭
  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (FormData.password !== FormData.confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    const body = {
      email: FormData.email,
      password: FormData.password,
    };
    (async () => {
      const data = await postFetch(URL_DOMAIN, "api/sign-up", body);
      localStorage.setItem("accessToken", await data.data.accessToken);
      return router.push("./folder");
    })();
  };

  return (
    <FormWrapper>
      <div>
        <Label htmlFor={`${id}-email`}>이메일</Label>
        <EmailInput
          name={`${id}-email`}
          type="email"
          FormData={FormData}
          onChange={handleInputChange}
          currentPath={currentPath}
          handleLoginSubmit={handleLoginSubmit}
          handleRegisterSubmit={handleRegisterSubmit}
        />
      </div>
      <div>
        <Label htmlFor={`${id}-password`}>비밀번호</Label>
        <PasswordInput
          name={`${id}-password`}
          type="password"
          FormData={FormData}
          onChange={handleInputChange}
          currentPath={currentPath}
          handleLoginSubmit={handleLoginSubmit}
          handleRegisterSubmit={handleRegisterSubmit}
        />
      </div>
      {currentPath === "signin" ? null : (
        <div>
          <Label htmlFor={`${id}-confirm-password`}>비밀번호 확인</Label>
          <PasswordInput
            name={`${id}-confirm-password`}
            type="password"
            FormData={FormData}
            onChange={handleInputChange}
            isConfirmPassword={true}
            currentPath={currentPath}
            handleLoginSubmit={handleLoginSubmit}
            handleRegisterSubmit={handleRegisterSubmit}
          />
        </div>
      )}
      {currentPath === "signin" ? (
        <SubmitButton type="submit" onClick={handleLoginSubmit}>
          로그인
        </SubmitButton>
      ) : (
        <SubmitButton type="submit" onClick={handleRegisterSubmit}>
          회원가입
        </SubmitButton>
      )}
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Label = styled.label`
  color: var(--black, #000);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SubmitButton = styled.button`
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 18px;

  border-radius: 8px;
  width: 400px;
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
`;
