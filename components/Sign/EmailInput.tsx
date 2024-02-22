import { CONFIRM_EMAIL, SignInputErrorMessages } from "@/Constants/Constants";
import { signFormDataInterface } from "@/interfaces";
import { useState } from "react";
import styled from "styled-components";

// ToDO 회원가입페이지, 로그인페이지의 인풋을 제어 컴포넌트로 사용할 것인가, 비제어 컴포넌트로 사용할 것인가?
export const EmailInput = ({
    type,
    name,
    FormData,
    onChange,
}: {
    type: string;
    name: string;
    FormData: signFormDataInterface;
    onChange: (data: signFormDataInterface) => void;
}) => {
    const [Error, setError] = useState<SignInputErrorMessages>(
        SignInputErrorMessages.NoError
    );

    const handleBlur = () => {
        const confirmEmail = new RegExp(CONFIRM_EMAIL);
        if (FormData.email === "") {
            return setError(SignInputErrorMessages.PleaseEnterEmail);
        }
        if (!confirmEmail.test(FormData.email)) {
            return setError(SignInputErrorMessages.NotValidEmail);
        }
        return setError(SignInputErrorMessages.NoError);
    };

    return (
        <>
            <Input
                type={type}
                placeholder="이메일을 입력해주세요"
                $Error={Error}
                value={FormData.email}
                onChange={(e) => {
                    onChange({ ...FormData, email: e.target.value });
                }}
                onBlur={handleBlur}
            />
            {Error === SignInputErrorMessages.NoError ? null : (
                <ErrorMessage>{Error}</ErrorMessage>
            )}
        </>
    );
};

export const Input = styled.input<{ $Error: SignInputErrorMessages }>`
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    border: 1px solid
        ${(props) =>
            props.$Error === SignInputErrorMessages.NoError
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
