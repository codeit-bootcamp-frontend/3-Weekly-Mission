// 과제 제출용 input 컴포넌트 테스트 페이지
/// /////////// 테스트용 페이지

import styled from 'styled-components';

import InputWithErrorMsg from '@components/ui/atoms/input/input-with-error-msg/InputWithErrorMsg';

import { useInput } from '@hooks/useInput';

const Test = () => {
  const [inputValue, onChangeInput, _clearInput] = useInput('');

  return (
    <div
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <form
        css={`
          width: 36rem;
        `}
      >
        <InputWithErrorMsg
          type='email'
          value={inputValue}
          onChange={onChangeInput}
          onBlur={() => console.log('focus out event!')}
          isError={false}
          srcOnPasswordType='/images/icon/eye-off.svg'
          srcOnTextType='/images/icon/eye-on.svg'
        >
          <Styled.StErrorMsg>내용을 다시 작성해주세요.</Styled.StErrorMsg>
        </InputWithErrorMsg>
        <InputWithErrorMsg
          type='password'
          value={inputValue}
          onChange={onChangeInput}
          onBlur={() => console.log('focus out event!')}
          isError={false}
          srcOnPasswordType='/images/icon/eye-off.svg'
          srcOnTextType='/images/icon/eye-on.svg'
        >
          <Styled.StErrorMsg>내용을 다시 작성해주세요.</Styled.StErrorMsg>
        </InputWithErrorMsg>
        <InputWithErrorMsg
          type='password'
          value={inputValue}
          onChange={onChangeInput}
          onBlur={() => console.log('focus out event!')}
          isError
          srcOnPasswordType='/images/icon/eye-off.svg'
          srcOnTextType='/images/icon/eye-on.svg'
        >
          <Styled.StErrorMsg>내용을 다시 작성해주세요.</Styled.StErrorMsg>
        </InputWithErrorMsg>
      </form>
    </div>
  );
};

export default Test;

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

const Styled = {
  StForm: styled.form`
    width: 35rem;
  `,
  StErrorMsg: styled.p`
    color: var(--Linkbrary-red, #ff5b56);

    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    margin: 0;
  `,
};
