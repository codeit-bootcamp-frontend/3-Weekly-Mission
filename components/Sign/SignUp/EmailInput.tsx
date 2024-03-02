import {
    CONFIRM_EMAIL,
    SignInputErrorMessages,
    URL_DOMAIN,
} from "@/constants/constants";
import styled from "styled-components";
import { useEmailInput } from "./EmailInput.hook";

interface EmailInputProps {
    id: string;
    register: any;
    errors: any;
    onRegisterSubmit: (e: React.FormEvent) => void;
    watch: any;
    setError: any;
}

export const EmailInput = ({
    id,
    register,
    errors,
    onRegisterSubmit,
    watch,
    setError,
}: EmailInputProps) => {
    const { isError, handleKeyDown, checkEmail } = useEmailInput(
        errors,
        onRegisterSubmit,
        watch,
        setError
    );
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
