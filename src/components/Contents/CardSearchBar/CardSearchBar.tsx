import styled from "styled-components";
import search from "../../../assets/images/Search.svg";
import resetImg from "../../../assets/images/_close.svg";
import { ChangeEvent } from "react";

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
        <CardSearchBarWrapper>
            <img src={search} alt="돋보기 모양 사진" />
            <input
                type="search"
                value={inputValue}
                onChange={onInputChange}
                placeholder="링크를 검색해 보세요."
            />
            {inputValue?.length === 0 ? null : (
                <button type="button" onClick={resetInputValue}>
                    <img src={resetImg} alt="리셋 버튼 이미지" />
                </button>
            )}
        </CardSearchBarWrapper>
    );
};

const CardSearchBarWrapper = styled.div`
    box-sizing: border-box;
    width: 1060px;
    padding: 15px 16px;
    border-radius: 10px;
    background: #f5f5f5;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;

    & > img {
        width: 16px;
        height: 16px;
    }

    input {
        width: 100%;
        background-color: #f5f5f5;
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
