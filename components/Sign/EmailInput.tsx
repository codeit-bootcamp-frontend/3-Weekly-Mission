import {
    CONFIRM_EMAIL,
    SignInputErrorMessages,
    URL_DOMAIN,
} from "@/Constants/Constants";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface EmailInputProps {
    id: string;
    currentPath: string;
    register: any;
    errors: any;
    onLoginSubmit: (e: React.FormEvent) => void;
    onRegisterSubmit: (e: React.FormEvent) => void;
    watch: any;
    setError: any;
}

export const EmailInput = ({
    id,
    currentPath,
    register,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    watch,
    setError,
}: EmailInputProps) => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (errors?.email?.message) {
            setIsError(true);
        }
        if (!errors?.email?.message) {
            setIsError(false);
        }
    }, [errors.email]);

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

    const checkEmail = () => {
        // 회원가입 페이지에서만 중복확인
        if (currentPath === "signin") {
            return;
        }
        (async () => {
            try {
                const data = {
                    email: watch("email"),
                };
                const res = await fetch(
                    `https://${URL_DOMAIN}/api/check-email`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                if (res.ok) {
                    const result = await res.json();
                    setIsError(false);
                    return setError("email", {
                        message: SignInputErrorMessages.NoError,
                    });
                }
                if (res.status === 409) {
                    setIsError(true);
                    return setError("email", {
                        message: SignInputErrorMessages.DuplicateEmail,
                    });
                }

                if (res.status === 400) {
                    setIsError(true);
                    return setError("email", {
                        message: SignInputErrorMessages.NotValidEmail,
                    });
                }
                throw new Error("알수 없는 에러");
            } catch (error) {
                console.error(error);
            }
        })();
    };

    if (currentPath === "signin") {
        return (
            <>
                <Input
                    id={id}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    $isError={isError}
                    {...register(id, {
                        required: SignInputErrorMessages.PleaseEnterEmail,
                        pattern: {
                            value: new RegExp(CONFIRM_EMAIL),
                            message: SignInputErrorMessages.NotValidEmail,
                        },
                    })}
                    onKeyDown={handleKeyDown}
                />
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
            </>
        );
    }
    return (
        <>
            <Input
                id={id}
                type="email"
                placeholder="이메일을 입력해주세요"
                $isError={isError}
                {...register(id, {
                    required: SignInputErrorMessages.PleaseEnterEmail,
                    pattern: {
                        value: new RegExp(CONFIRM_EMAIL),
                        message: SignInputErrorMessages.NotValidEmail,
                    },
                })}
                onKeyDown={handleKeyDown}
                // onBlur 핸들러가 존재하는 경우 signin 페이지에서 이메일 유효성 검사가 이루어지지 않음
                onBlur={checkEmail}
            />
            {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
        </>
    );
};

export const Input = styled.input<{ $isError: boolean }>`
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

export default EmailInput;
