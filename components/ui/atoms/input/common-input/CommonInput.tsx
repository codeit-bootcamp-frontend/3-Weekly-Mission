import { ComponentPropsWithRef, HTMLInputTypeAttribute, ImgHTMLAttributes, useState } from 'react';

import styled from 'styled-components';

export interface CommonInputProps extends ComponentPropsWithRef<'input'> {
  type?: HTMLInputTypeAttribute;
  isError?: boolean;
  srcOnPasswordType?: ImgHTMLAttributes<HTMLImageElement>['src'];
  srcOnTextType?: ImgHTMLAttributes<HTMLImageElement>['src'];
}

const CommonInput = ({
  type: initialType = 'text',
  value,
  isError,
  onChange,
  onBlur,
  placeholder = '내용 입력',
  srcOnPasswordType,
  srcOnTextType,
  ...rest
}: CommonInputProps) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(initialType);

  const handleClickIcon = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <StInputWrap $isError={isError}>
      <StInput type={inputType} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} {...rest} />
      {initialType === 'password' && (
        <StInputIcon
          src={inputType === 'password' ? srcOnPasswordType : srcOnTextType}
          alt='비밀번호 표시 여부 아이콘'
          onClick={handleClickIcon}
        />
      )}
    </StInputWrap>
  );
};

export default CommonInput;

const StInputWrap = styled.div<{ $isError?: boolean }>`
  display: flex;
  width: 100%;
  padding: 1.8rem 1.5rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.8rem;
  border: 1px solid ${({ $isError, theme }) => ($isError ? theme.red : theme.gray20)};

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
  }
  background: ${({ theme }) => theme.white};

  color: ${({ theme }) => theme.gray60};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */
`;

const StInput = styled.input`
  width: 100%;
  max-width: 100%;
  border: none;
  padding: 0;
`;

const StInputIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
