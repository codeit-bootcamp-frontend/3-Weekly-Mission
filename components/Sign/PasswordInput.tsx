import { CONFIRM_PASSWORD_ALPHABET, CONFIRM_PASSWORD_NUMBER, SignInputErrorMessages } from "@/Constants/Constants";
import { signFormDataInterface } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

// ToDo 일반 패스워드 인풋과 비밀번호 확인 패스워드 인풋 구분을 하는데 코드가 너무 길어져서 차라리 따로 빼는게 나을듯
const PasswordInput = ({
  type,
  name,
  formData,
  onChange,
  isConfirmPassword,
  currentPath,
  handleLoginSubmit,
  handleRegisterSubmit,
  passwordError,
  setPasswordError,
  confirmPasswordError,
  setConfirmPasswordError,
  register,
}: {
  type: string;
  name: string;
  formData: signFormDataInterface;
  onChange: (data: signFormDataInterface) => void;
  isConfirmPassword?: boolean;
  currentPath: string;
  handleLoginSubmit: (e: React.FormEvent) => void;
  handleRegisterSubmit: (e: React.FormEvent) => void;
  passwordError: SignInputErrorMessages;
  setPasswordError: (passwordError: SignInputErrorMessages) => void;
  confirmPasswordError: SignInputErrorMessages;
  setConfirmPasswordError: (confirmPasswordError: SignInputErrorMessages) => void;
  register: any;
}) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handlePasswordBlur = () => {
    const confirmPasswordAlphabet = new RegExp(CONFIRM_PASSWORD_ALPHABET);
    const confirmPasswordNumber = new RegExp(CONFIRM_PASSWORD_NUMBER);

    if (formData.password === "") {
      return setPasswordError(SignInputErrorMessages.PleaseEnterPassword);
    }

    if (
      formData.password.length < 8 ||
      !confirmPasswordAlphabet.test(formData.password) ||
      !confirmPasswordNumber.test(formData.password)
    ) {
      return setPasswordError(SignInputErrorMessages.CheckPasswordFormat);
    }

    return setPasswordError(SignInputErrorMessages.NoError);
  };

  const handlePasswordConfirmBlur = () => {
    if (formData.password !== formData.confirmPassword) {
      console.log("not matched password");
      return setConfirmPasswordError(SignInputErrorMessages.NotMatchedPassword);
    }
    return setConfirmPasswordError(SignInputErrorMessages.NoError);
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
    <Wrapper>
      {!isConfirmPassword ? (
        <>
          <Input
            type={isHidden ? "password" : "text"}
            placeholder={
              currentPath === "signin" ? "비밀번호를 입력해주세요" : "영문, 숫자를 조합해 8자 이상 입력해 주세요."
            }
            $passwordError={passwordError}
            value={formData.password}
            onChange={(e) => {
              onChange({ ...formData, password: e.target.value });
            }}
            onBlur={handlePasswordBlur}
            onKeyDown={handleKeyDown}
          />

          <PasswordHiddenButton type="button" onClick={toggleHidden}>
            <Image
              src={isHidden ? "/images/signin-eye-off.svg" : "/images/signin-eye-on.svg"}
              alt="눈 아이콘"
              width={16}
              height={16}
            />
          </PasswordHiddenButton>
          {passwordError === SignInputErrorMessages.NoError ? null : <ErrorMessage>{passwordError}</ErrorMessage>}
        </>
      ) : (
        <>
          <Input
            type={isHidden ? "password" : "text"}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            $passwordError={passwordError}
            value={formData.confirmPassword}
            onChange={(e) => {
              onChange({
                ...formData,
                confirmPassword: e.target.value,
              });
            }}
            onBlur={handlePasswordConfirmBlur}
            onKeyDown={handleKeyDown}
          />

          <PasswordHiddenButton type="button" onClick={toggleHidden}>
            <Image
              src={isHidden ? "/images/signin-eye-off.svg" : "/images/signin-eye-on.svg"}
              alt="눈 아이콘"
              width={16}
              height={16}
            />
          </PasswordHiddenButton>
          {confirmPasswordError === SignInputErrorMessages.NoError ? null : (
            <ErrorMessage>{confirmPasswordError}</ErrorMessage>
          )}
        </>
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $passwordError: SignInputErrorMessages }>`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.$passwordError === SignInputErrorMessages.NoError
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

export const PasswordHiddenButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  padding: 0;
  position: absolute;
  top: 22px;
  right: 22px;
`;

export default PasswordInput;
