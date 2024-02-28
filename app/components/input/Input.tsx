'use client';

import { useState } from 'react';
import styled from 'styled-components';
import eyeOffImg from '/public/eye-off.svg';
import eyeOnImg from '/public/eye-on.svg';

interface Props {
  type: string;
  placeholder: string;
  id: string;
  register: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errors;
}

export default function Input({
  type,
  placeholder,
  id,
  register,
  errors,
}: Props) {
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

  const errorMessage = {
    email: {
      required: '이메일을 입력해주세요.',
      message: '올바른 이메일 주소가 아닙니다.',
    },
    password: {
      required: '비밀번호를 입력해주세요.',
      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
    verifyPassword: {
      required: '비밀번호를 다시 입력해주세요.',
      message: '비밀번호가 일치하지 않아요.',
    },
  };

  const pattern = {
    // eslint-disable-next-line
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/,
  };

  return (
    <Wrapper>
      <Container>
        <StyledInput
          id={id}
          type={inputType === 'verifyPassword' ? 'password' : inputType}
          placeholder={placeholder}
          {...register(`${type}`, {
            required: errorMessage[type].required,
            pattern: {
              value: pattern[type],
              message: errorMessage[type].message,
            },
            onblur: (e) => console.log(e),
          })}
        />
        {type === 'password' || type === 'verifyPassword' ? (
          <Icon $imgUrl={imgUrl} onClick={toggleIcon} />
        ) : null}
      </Container>
      {errors[type] && <Text>{errors[type].message}</Text>}
    </Wrapper>
  );
}

interface StyledInputProps {
  $imgUrl?: string;
  $isErrorValue?: boolean;
}

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
const Text = styled.span`
  color: var(--Linkbrary-red, #ff5b56);
  font-size: 14px;
`;
