import { CONFIRM_EMAIL, SignInputErrorMessages, URL_DOMAIN } from "@/Constants/Constants";
import { signFormDataInterface } from "@/interfaces";
import postFetch from "@/utils/postFetch";
import { useState } from "react";
import styled from "styled-components";

// ToDo 회원가입페이지, 로그인페이지의 인풋을 제어 컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
// ToDo 이메일 중복확인 에러처리하기
export const EmailInput = ({
  type,
  name,
  formData,
  onChange,
  currentPath,
  handleLoginSubmit,
  handleRegisterSubmit,
  inputError,
  setInputError,
  register,
  errors,
}: {
  type: string;
  name: string;
  formData: signFormDataInterface;
  onChange: (data: signFormDataInterface) => void;
  currentPath: string;
  handleLoginSubmit: (e: React.FormEvent) => void;
  handleRegisterSubmit: (e: React.FormEvent) => void;
  inputError: SignInputErrorMessages;
  setInputError: (inputError: SignInputErrorMessages) => void;
  register: any;
  errors: any;
}) => {
  const handleBlur = () => {
    // 회원가입 페이지에서만 중복확인
    if (currentPath === "signup") {
      (async () => {
        try {
          const body = { email: formData.email };
          const data = await postFetch(URL_DOMAIN, "api/check-email", body);
          if (data.isUsableNickname) {
            return setInputError(SignInputErrorMessages.NoError);
          }
        } catch (error) {
          console.error(error);
          return setInputError(SignInputErrorMessages.DuplicateEmail);
        }
      })();
    }

    return setInputError(SignInputErrorMessages.NoError);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // 회원가입 페이지인 경우 회원가입 버튼 클릭
      if (currentPath === "signup") {
        return handleRegisterSubmit(e);
      }
      // 로그인 페이지인 경우 로그인 버튼 클릭
      if (currentPath === "signin") {
        return handleLoginSubmit(e);
      }
    }
  };

  return (
    <>
      <Input
        type={type}
        placeholder="이메일을 입력해주세요"
        {...register("email", {
          required: SignInputErrorMessages.PleaseEnterEmail,
          pattern: {
            value: CONFIRM_EMAIL,
            message: SignInputErrorMessages.NotValidEmail,
          },
        })}
        $inputError={errors.email && errors.email.message}
        value={formData.email}
        onChange={(e) => {
          onChange({ ...formData, email: e.target.value });
        }}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : null}
    </>
  );
};

export const Input = styled.input<{ $inputError: SignInputErrorMessages }>`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.$inputError === SignInputErrorMessages.NoError
        ? "var(--Linkbrary-gray20, #ccd5e3)"
        : "var(--Linkbrary-red, #ff5b56)"};

  display: flex;
  padding: 18px 37px 18px 15px;
  justify-content: center;
  align-items: center;
  background: var(--Linkbrary-white, #fff);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--Linkbrary-red, #ff5b56);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default EmailInput;
