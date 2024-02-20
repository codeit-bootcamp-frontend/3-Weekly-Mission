import styled from "styled-components";
import { ChangeEvent } from "react";
import Image from "next/image";

interface CardSearchBarProps {
    inputValue: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    resetInputValue: () => void;
}

// Think: search의 내장 reset 버튼을 사용 할것인가? 아니면 직접 만들어서 사용할 것인가? 생각해야함
const CardSearchBar = ({
    inputValue,
    onInputChange,
    resetInputValue,
}: CardSearchBarProps) => {
    return (
        <Form onReset={resetInputValue}>
            <Image
                src="/images/Search.svg"
                alt="돋보기 모양 사진"
                width={16}
                height={16}
            />
            <input
                type="search"
                value={inputValue}
                onChange={onInputChange}
                placeholder="링크를 검색해 보세요."
            />
            {inputValue?.length === 0 ? null : (
                <button type="reset">
                    <Image
                        src="/images/_close.svg"
                        alt="리셋 버튼 이미지"
                        width={24}
                        height={24}
                    />
                </button>
            )}
        </Form>
    );
};

const Form = styled.form`
    box-sizing: border-box;
    width: 1060px;
    padding: 15px 16px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;

    input {
        width: 100%;
        background-color: #f5f5f5;

        &[type="search"] {
            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                -webkit-appearance: none;
            }
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1123px) {
        width: 704px;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 13px 16px;
        font-size: 14px;
        margin-bottom: 32px;
    }
`;

export default CardSearchBar;
