import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLInputTypeAttribute,
  ImgHTMLAttributes,
  useState,
} from 'react';

import styled from 'styled-components';

export type AppendedCommonInputProps = {
  isError?: boolean;
  srcOnPasswordType?: ImgHTMLAttributes<HTMLImageElement>['src'];
  srcOnTextType?: ImgHTMLAttributes<HTMLImageElement>['src'];
  type?: HTMLInputTypeAttribute;
};

export interface CommonInputProps extends ComponentPropsWithoutRef<'input'>, AppendedCommonInputProps {}

export type CommonInputType = typeof CommonInput;

const CommonInput = forwardRef<ElementRef<'input'>, CommonInputProps>(
  (
    {
      type: initialType = 'text',
      isError,
      onBlur,
      placeholder = '내용 입력',
      srcOnPasswordType,
      srcOnTextType,
      ...rest
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(initialType);

    const handleClickIcon = () => {
      setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
      <StInputWrap $isError={isError}>
        <StInput ref={ref} type={inputType} onBlur={onBlur} placeholder={placeholder} {...rest} />
        {initialType === 'password' && (
          <StInputIcon
            src={inputType === 'password' ? srcOnPasswordType : srcOnTextType}
            alt='비밀번호 표시 여부 아이콘'
            onClick={handleClickIcon}
          />
        )}
      </StInputWrap>
    );
  },
);

CommonInput.displayName = 'CommonInput';

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

  /* @see{@link https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete} */
  &:is(:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {
    -webkit-background-clip: text;
  }
`;

const StInputIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;

  cursor: pointer;
`;
