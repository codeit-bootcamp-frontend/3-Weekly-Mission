import {
    CONFIRM_PASSWORD,
    SignInputErrorMessages,
} from "@/constants/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface PasswordInputProps {
    currentPath: string;
    id: string;
    register: any;
    errors: any;
    onLoginSubmit: (e: React.FormEvent) => void;
    watch?: any;
    onRegisterSubmit: (e: React.FormEvent) => void;
}

// ToDo 일반 패스워드 인풋과 비밀번호 확인 패스워드 인풋 구분을 하는데 코드가 너무 길어져서 차라리 따로 빼는게 나을듯
const PasswordInput = ({
    currentPath,
    id,
    register,
    errors,
    onLoginSubmit,
    watch,
    onRegisterSubmit,
}: PasswordInputProps) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

    useEffect(() => {
        if (errors.password?.message) {
            return setIsPasswordError(true);
        }
        if (!errors.password?.message) {
            return setIsPasswordError(false);
        }
    }, [errors.password]);

    useEffect(() => {
        if (errors.confirmPassword?.message) {
            return setIsConfirmPasswordError(true);
        }

        if (!errors.confirmPassword?.message) {
            return setIsConfirmPasswordError(false);
        }
    }, [errors.confirmPassword]);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            // 로그인 페이지인 경우 로그인 버튼 클릭
            if (currentPath === "signin") {
                onLoginSubmit(e);
            }
            // 회원가입 페이지인 경우 회원가입 버튼 클릭
            if (currentPath === "signup") {
                onRegisterSubmit(e);
            }
        }
    };

    return (
        <Wrapper>
            {id === "password" ? (
                <>
                    <Input
                        id={id}
                        type={isHidden ? "password" : "text"}
                        placeholder={
                            currentPath === "signin"
                                ? "비밀번호를 입력해주세요"
                                : "영문, 숫자를 조합해 8자 이상 입력해 주세요."
                        }
                        $isError={isPasswordError}
                        {...register("password", {
                            required:
                                SignInputErrorMessages.PleaseEnterPassword,
                            pattern: {
                                value: new RegExp(CONFIRM_PASSWORD),
                                message:
                                    SignInputErrorMessages.CheckPasswordFormat,
                            },
                        })}
                        onKeyDown={handleKeyDown}
                    />

                    <PasswordHiddenButton type="button" onClick={toggleHidden}>
                        <Image
                            src={
                                isHidden
                                    ? "/images/signin-eye-off.svg"
                                    : "/images/signin-eye-on.svg"
                            }
                            alt="눈 아이콘"
                            width={16}
                            height={16}
                        />
                    </PasswordHiddenButton>

                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </>
            ) : (
                <>
                    <Input
                        id={id}
                        type={isHidden ? "password" : "text"}
                        placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                        $isError={isConfirmPasswordError}
                        {...register("confirmPassword", {
                            required:
                                SignInputErrorMessages.PleaseEnterPassword,
                            pattern: {
                                value: new RegExp(CONFIRM_PASSWORD),
                                message:
                                    SignInputErrorMessages.CheckPasswordFormat,
                            },
                            validate: (value: string) => {
                                return (
                                    value === watch("password") ||
                                    SignInputErrorMessages.NotMatchedPassword
                                );
                            },
                        })}
                        onKeyDown={handleKeyDown}
                    />

                    <PasswordHiddenButton type="button" onClick={toggleHidden}>
                        <Image
                            src={
                                isHidden
                                    ? "/images/signin-eye-off.svg"
                                    : "/images/signin-eye-on.svg"
                            }
                            alt="눈 아이콘"
                            width={16}
                            height={16}
                        />
                    </PasswordHiddenButton>
                    {errors.confirmPassword && (
                        <ErrorMessage>
                            {errors.confirmPassword.message}
                        </ErrorMessage>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    position: relative;
`;

export const Input = styled.input<{
    $isError: boolean;
}>`
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    border: 1px solid
        ${(props) =>
            props.$isError === false
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
