import styled from "styled-components";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import { FormEvent, useId, useState } from "react";
import { signFormDataInterface } from "@/interfaces";
import { SignInputErrorMessages, URL_DOMAIN } from "@/Constants/Constants";
import { useRouter } from "next/router";
import postFetch from "@/utils/postFetch";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Think: 제어컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const Form = ({ currentPath }: { currentPath: string }) => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const router = useRouter();

    // 로그인 버튼 클릭
    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        (async () => {
            try {
                const data: signFormDataInterface = {
                    email: watch("email"),
                    password: watch("password"),
                };
                const res = await postFetch(URL_DOMAIN, "api/sign-in", data);
                const result = res.data;
                if (result.accessToken) {
                    localStorage.setItem("accessToken", result.accessToken);
                    router.push("/folder");
                }
            } catch (error) {
                console.error(error);
                setError("email", {
                    message: SignInputErrorMessages.PleaseConfirmEmail,
                });
                setError("password", {
                    message: SignInputErrorMessages.PleaseConfirmPassword,
                });
            }
        })();
    };

    // 회원가입 버튼 클릭
    const handleRegisterSubmit = (e: FormEvent) => {
        e.preventDefault();
        (async () => {
            try {
                const data: signFormDataInterface = {
                    email: watch("email"),
                    password: watch("password"),
                };
                const res = await postFetch(URL_DOMAIN, "api/sign-up", data);
                const result = res.data;
                if (result.accessToken) {
                    localStorage.setItem("accessToken", result.accessToken);
                    router.push("/folder");
                }
            } catch (error) {
                console.error(error);
                setError("email", {
                    message: SignInputErrorMessages.PleaseConfirmEmail,
                });
                setError("password", {
                    message: SignInputErrorMessages.PleaseConfirmPassword,
                });
            }
        })();
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form submitted.", data);
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label htmlFor="email">이메일</Label>
                <EmailInput
                    id="email"
                    currentPath={currentPath}
                    register={register}
                    errors={errors}
                    onLoginSubmit={handleLoginSubmit}
                    onRegisterSubmit={handleRegisterSubmit}
                    watch={watch}
                    setError={setError}
                />
            </div>
            <div>
                <Label htmlFor="password">비밀번호</Label>
                <PasswordInput
                    id="password"
                    currentPath={currentPath}
                    register={register}
                    errors={errors}
                    onLoginSubmit={handleLoginSubmit}
                    onRegisterSubmit={handleRegisterSubmit}
                />
            </div>
            {currentPath === "signin" ? null : (
                <div>
                    <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                    <PasswordInput
                        id="confirmPassword"
                        currentPath={currentPath}
                        register={register}
                        errors={errors}
                        onLoginSubmit={handleLoginSubmit}
                        onRegisterSubmit={handleRegisterSubmit}
                        watch={watch}
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
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
`;
