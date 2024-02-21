import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { ModalInterface } from "../../../interfaces";

interface ModalInputProps {
    placeholder?: string;
    modal: ModalInterface;
}

const ModalInput = ({ placeholder = "", modal }: ModalInputProps) => {
    const [inputValue, setInputValue] = useState(modal.folderName);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <ModalInputWrapper>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={onChange}
            />
        </ModalInputWrapper>
    );
};

const ModalInputWrapper = styled.div`
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #ccd5e3;
    width: 280px;
    padding: 18px 15px;

    &:focus-within {
        border-radius: 8px;
        border: 1px solid #6d6afe;
    }

    &input {
        color: #373740;
        font-family: Pretendard;
        font-size: 16px;
        line-height: 24px; /* 150% */
    }
`;

export default ModalInput;
