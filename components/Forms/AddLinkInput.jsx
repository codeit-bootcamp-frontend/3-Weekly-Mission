import React, {useRef, useState} from 'react';
import * as S from './AddLinkInput.style';

const INITIAL_INPUT_VALUE = '링크를 입력해주세요';

export default function AddLinkInput() {

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickButton = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setInputValue(INITIAL_INPUT_VALUE);
    }
  };

  return (
      <S.InputBox>
        <S.ElementsWrapper>
          <S.SuggestionWrapper>
            <S.LinkImg src="/icons/link-icon.png" alt="link icon"/>
            <S.Input ref={inputRef} placeholder={inputValue} onChange={onChangeInput}/>
          </S.SuggestionWrapper>
          <S.Button onClick={onClickButton}>추가하기</S.Button>
        </S.ElementsWrapper>
      </S.InputBox>
  )
}
