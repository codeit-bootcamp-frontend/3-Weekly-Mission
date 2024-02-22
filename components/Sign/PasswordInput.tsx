import { SignInputErrorMessages } from "@/Constants/Constants";
import { signFormDataInterface } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const PasswordInput = ({
    type,
    name,
    FormData,
    onChange,
    isConfirmPassword,
}: {
    type: string;
    name: string;
    FormData: signFormDataInterface;
    onChange: (data: signFormDataInterface) => void;
    isConfirmPassword?: boolean;
}) => {
    const [Error, setError] = useState<SignInputErrorMessages>(
        SignInputErrorMessages.NoError
    );
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handlePasswordBlur = () => {
        console.log(FormData.password);
        if (FormData.password === "") {
            return setError(SignInputErrorMessages.PleaseEnterPassword);
        }
        return setError(SignInputErrorMessages.NoError);
    };

    const handlePasswordConfirmBlur = () => {};

    return (
        <Wrapper>
            {!isConfirmPassword ? (
                <Input
                    type={isHidden ? "password" : "text"}
                    placeholder="비밀번호를 입력해주세요"
                    $Error={Error}
                    value={FormData.password}
                    onChange={(e) => {
                        onChange({ ...FormData, password: e.target.value });
                    }}
                    onBlur={handlePasswordBlur}
                />
            ) : (
                <Input
                    type={isHidden ? "password" : "text"}
                    placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                    $Error={Error}
                    value={FormData.confirmPassword}
                    onChange={(e) => {
                        onChange({
                            ...FormData,
                            confirmPassword: e.target.value,
                        });
                    }}
                    onBlur={handlePasswordConfirmBlur}
                />
            )}

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
            {Error === SignInputErrorMessages.NoError ? null : (
                <ErrorMessage>{Error}</ErrorMessage>
            )}
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    position: relative;
`;

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
