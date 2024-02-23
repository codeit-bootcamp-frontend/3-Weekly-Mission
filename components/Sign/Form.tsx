import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import { FormEvent, useId, useState } from "react";
import { signFormDataInterface } from "@/interfaces";
import { CONFIRM_EMAIL, SignInputErrorMessages, URL_DOMAIN } from "@/Constants/Constants";
import { useRouter } from "next/router";
import postFetch from "@/utils/postFetch";
import { set, useForm } from "react-hook-form";

// Think: 제어컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const Form = ({ currentPath }: { currentPath: string }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const router = useRouter();
  const id = useId();
  const [inputError, setInputError] = useState<SignInputErrorMessages>(SignInputErrorMessages.NoError);
  const [passwordError, setPasswordError] = useState<SignInputErrorMessages>(SignInputErrorMessages.NoError);
  const [confirmPasswordError, setConfirmPasswordError] = useState<SignInputErrorMessages>(
    SignInputErrorMessages.NoError
  );
  const [formData, setFormData] = useState<signFormDataInterface>(() => {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  });

  const handleInputChange = (data: signFormDataInterface) => {
    setFormData({ ...formData, ...data });
  };

  // 로그인 버튼 클릭
  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: formData.email,
      password: formData.password,
    };
    (async () => {
      try {
        const data = await postFetch(URL_DOMAIN, "api/sign-in", body);
        localStorage.setItem("accessToken", await data.data.accessToken);
        return router.push("./folder");
      } catch (error) {
        console.error(error);
        setInputError(SignInputErrorMessages.PleaseConfirmEmail);
        setPasswordError(SignInputErrorMessages.PleaseConfirmPassword);
      }
    })();
  };

  // 회원가입 버튼 클릭
  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: formData.email,
      password: formData.password,
    };
    (async () => {
      try {
        const data = await postFetch(URL_DOMAIN, "api/sign-up", body);
        localStorage.setItem("accessToken", await data.data.accessToken);
        return router.push("./folder");
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(async (data) => {
        alert(JSON.stringify(data));
      })}>
      <input
        type="text"
        {...register("email1", {
          required: SignInputErrorMessages.PleaseEnterEmail,
          pattern: {
            value: new RegExp(CONFIRM_EMAIL),
            message: SignInputErrorMessages.NotValidEmail,
          },
        })}
      />
      <button onClick={() => console.log(errors)}>버튼</button>
      <div>
        <Label htmlFor={`${id}-email`}>이메일</Label>
        <EmailInput
          name={`${id}-email`}
          type="email"
          formData={formData}
          onChange={handleInputChange}
          currentPath={currentPath}
          handleLoginSubmit={handleLoginSubmit}
          handleRegisterSubmit={handleRegisterSubmit}
          inputError={inputError}
          setInputError={setInputError}
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <Label htmlFor={`${id}-password`}>비밀번호</Label>
        <PasswordInput
          name={`${id}-password`}
          type="password"
          formData={formData}
          onChange={handleInputChange}
          isConfirmPassword={false}
          currentPath={currentPath}
          handleLoginSubmit={handleLoginSubmit}
          handleRegisterSubmit={handleRegisterSubmit}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          confirmPasswordError={confirmPasswordError}
          setConfirmPasswordError={setConfirmPasswordError}
          register={register}
        />
      </div>
      {currentPath === "signin" ? null : (
        <div>
          <Label htmlFor={`${id}-confirm-password`}>비밀번호 확인</Label>
          <PasswordInput
            name={`${id}-confirm-password`}
            type="password"
            formData={formData}
            onChange={handleInputChange}
            isConfirmPassword={true}
            currentPath={currentPath}
            handleLoginSubmit={handleLoginSubmit}
            handleRegisterSubmit={handleRegisterSubmit}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            confirmPasswordError={confirmPasswordError}
            setConfirmPasswordError={setConfirmPasswordError}
            register={register}
          />
        </div>
      )}
      {currentPath === "signin" ? (
        <SubmitButton type="submit" disabled={isSubmitting} onClick={handleLoginSubmit}>
          로그인
        </SubmitButton>
      ) : (
        <SubmitButton type="submit" disabled={isSubmitting} onClick={handleRegisterSubmit}>
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
