import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const PasswordInput = ({ type }: { type: string }) => {
    const [inputValue, setInputValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    return (
        <Wrapper>
            <Input
                type={isHidden ? "password" : "text"}
                placeholder="내용 입력"
                $isError={isError}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <PasswordHiddenButton type="button" onClick={toggleHidden}>
                <Image
                    src={
                        isHidden
                            ? "@/public/images/signin-eye-off.svg"
                            : "@/public/images/signin-eye-on.svg"
                    }
                    alt="눈 아이콘"
                    width={16}
                    height={16}
                />
            </PasswordHiddenButton>
            {isError && <ErrorMessage>내용을 다시 작성해주세요.</ErrorMessage>}
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
`;

export const Input = styled.input<{ $isError: boolean }>`
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    border: 1px solid
        ${(props) =>
            props.$isError
                ? "var(--Linkbrary-red, #ff5b56)"
                : "var(--Linkbrary-gray20, #ccd5e3)"};

    display: flex;
    width: 350px;
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
