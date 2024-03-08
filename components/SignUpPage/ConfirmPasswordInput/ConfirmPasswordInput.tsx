import {
    CONFIRM_PASSWORD,
    SignInputErrorMessages,
} from "@/constants/constants";
import Image from "next/image";
import styled from "styled-components";
import { useConfirmPasswordInput } from "./ConfirmPasswordInput.hook";

interface ConfirmPasswordInputProps {
    id: string;
    register: any;
    errors: any;
    watch?: any;
    onRegisterSubmit: (e: React.FormEvent) => void;
}

// ToDo 일반 패스워드 인풋과 비밀번호 확인 패스워드 인풋 구분을 하는데 코드가 너무 길어져서 차라리 따로 빼는게 나을듯
const ConfirmPasswordInput = ({
    id,
    register,
    errors,
    watch,
    onRegisterSubmit,
}: ConfirmPasswordInputProps) => {
    const { isHidden, isConfirmPasswordError, toggleHidden, handleKeyDown } =
        useConfirmPasswordInput(errors, onRegisterSubmit);

    return (
        <Wrapper>
            <>
                <Input
                    id={id}
                    type={isHidden ? "password" : "text"}
                    placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                    $isError={isConfirmPasswordError}
                    {...register("confirmPassword", {
                        required: SignInputErrorMessages.PleaseEnterPassword,
                        pattern: {
                            value: new RegExp(CONFIRM_PASSWORD),
                            message: SignInputErrorMessages.CheckPasswordFormat,
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

export default ConfirmPasswordInput;
