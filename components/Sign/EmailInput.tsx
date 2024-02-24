import { CONFIRM_EMAIL, SignInputErrorMessages } from "@/Constants/Constants";
import { useState } from "react";
import styled from "styled-components";

// ToDo 회원가입페이지, 로그인페이지의 인풋을 제어 컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
// ToDo 이메일 중복확인 에러처리하기
export const EmailInput = ({
    currentPath,
    register,
    errors,
}: {
    currentPath: string;
    register: any;
    errors: any;
}) => {
    const [isError, setIsError] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            // 회원가입 페이지인 경우 회원가입 버튼 클릭
            if (currentPath === "signup") {
            }
            // 로그인 페이지인 경우 로그인 버튼 클릭
            if (currentPath === "signin") {
            }
        }
    };

    return (
        <>
            <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                $isError={isError}
                {...register("email", {
                    required: SignInputErrorMessages.PleaseEnterEmail,
                    pattern: {
                        value: CONFIRM_EMAIL,
                        message: SignInputErrorMessages.NotValidEmail,
                    },
                })}
            />
            <ErrorMessage>에러메시지</ErrorMessage>
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
