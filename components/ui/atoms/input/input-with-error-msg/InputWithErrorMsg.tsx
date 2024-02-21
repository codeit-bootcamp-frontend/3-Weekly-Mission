import { ComponentType, PropsWithChildren } from 'react';

import styled from 'styled-components';

import CommonInput, { CommonInputProps } from '../common-input/CommonInput';

type TInputErrorProps = PropsWithChildren<CommonInputProps>;
type TWrappedCompWithError = ComponentType<TInputErrorProps>;

const withError = (Component: typeof CommonInput) => {
  const WrappedComponent: TWrappedCompWithError = ({ children, isError, ...rest }) => (
    <WithErrorWrap>
      <Component isError={isError} {...rest} />
      {isError && children}
    </WithErrorWrap>
  );

  return WrappedComponent;
};

const WithErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  row-gap: 0.6rem;
`;

const InputWithErrorMsg = withError(CommonInput);
InputWithErrorMsg.displayName = 'withErrorMsg(CommonInput)';

export default InputWithErrorMsg;

// <InputWithErrorMsg
//   type='email'
//   value={inputValue}
//   onChange={onChangeInput}
//   onBlur={() => console.log('focus out event!')}
//   isError={false}
//   srcOnPasswordType='/images/icon/eye-off.svg'
//   srcOnTextType='/images/icon/eye-on.svg'
// >
//   <StErrorMsg>내용을 다시 작성해주세요.</StErrorMsg>
// </InputWithErrorMsg>;

// const StForm = styled.form`
//   width: 35rem;
// `;

// const StErrorMsg = styled.p`
//   color: var(--Linkbrary-red, #ff5b56);

//   font-size: 1.4rem;
//   font-weight: 400;
//   line-height: normal;

//   margin: 0;
// `;
