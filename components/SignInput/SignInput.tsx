import { useState } from "react";
import styled from "styled-components";

const SignInput = ({ type }: { type: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Input
        type={type}
        placeholder="내용 입력"
        $isError={isError}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {isError && <ErrorMessage>내용을 다시 작성해주세요.</ErrorMessage>}
    </>
  );
};

export const Input = styled.input<{ $isError: boolean }>`
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${(props) => (props.$isError ? "var(--Linkbrary-red, #ff5b56)" : "var(--Linkbrary-gray20, #ccd5e3)")};

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

export default SignInput;
