'use client';

import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import eyeOffImg from '/public/eye-off.svg';
import eyeOnImg from '/public/eye-on.svg';

export default function Input({
  type,
  placeholder,
  inputValue,
  updateInputValue,
  isErrorValue,
  testInputValue,
}: {
  type: string;
  placeholder: string;
  inputValue: string;
  updateInputValue: (value: string) => void;
  isErrorValue: boolean;
  testInputValue: () => void;
}) {
  const [imgUrl, setImgUrl] = useState(eyeOffImg.src);
  const [inputType, setInputType] = useState(type);

  const toggleIcon = () => {
    if (imgUrl === eyeOffImg.src) {
      setImgUrl(eyeOnImg.src);
      setInputType('text');
    } else {
      setImgUrl(eyeOffImg.src);
      setInputType('password');
    }
  };
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    updateInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <StyledInput
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          onChange={handleInputValue}
          $isErrorValue={isErrorValue}
          onBlur={testInputValue}
        />
        {type === 'password' ? (
          <Icon $imgUrl={imgUrl} onClick={toggleIcon} />
        ) : null}
      </Container>
      {isErrorValue ? <Text>내용을 다시 작성해 주세요</Text> : null}
    </Wrapper>
  );
}

interface StyledInputProps {
  $imgUrl?: string;
  $isErrorValue?: boolean;
}

const Text = styled.span`
  color: var(--Linkbrary-red, #ff5b56);
  font-size: 14px;
`;

const Icon = styled.button<StyledInputProps>`
  background-image: ${(props) => `url(${props.$imgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 15px;
  cursor: pointer;
  padding: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;
const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  width: 100%;
  padding: 18px 31px 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${(props) =>
    props.$isErrorValue
      ? '1px solid var(--Linkbrary-red, #FF5B56)'
      : '1px solid var(--Linkbrary-gray20, #ccd5e3)'};

  background: var(--Linkbrary-white, #fff);
  outline: none;

  &::placeholder {
    color: var(--Linkbrary-gray60, #9fa6b2);
    line-height: 24px;
  }

  &:focus {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  }
`;
