import Image from 'next/image';
import styled from 'styled-components';

import MagnifierSvg from '@public/images/icon/magnifier.svg?component';
import { mediaBreakpoint } from '@style/media-breakpoint/mediaBreakpoint';
import { objectFit } from '@style/object-fit/object-fit';

export type TSearchBarProps = {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
};
const CommonSearchBar = ({ input, onChange, clearInput }: TSearchBarProps) => {
  return (
    <StSearchBarBox>
      <StInputArea>
        <StInputContentsArea>
          <StMagnifierIcon />
          <StSearchBarInput type='search' placeholder='링크를 검색해보세요.' value={input} onChange={onChange} />
        </StInputContentsArea>
        {input && (
          <StSearchBarCancelBtn type='reset' onClick={clearInput}>
            <Image css={objectFit.cover} fill alt='검색 취소 버튼 이미지' src='/images/icon/close.svg' />
          </StSearchBarCancelBtn>
        )}
      </StInputArea>
    </StSearchBarBox>
  );
};

export default CommonSearchBar;

const StMagnifierIcon = styled(MagnifierSvg).attrs({
  'aria-description': '검색창 돋보기 아이콘',
})`
  width: 1.6rem;
  height: 1.6rem;

  stroke: #666666;
`;

const StSearchBarBox = styled.form`
  width: 100%;

  &:focus-within ${StMagnifierIcon} {
    stroke: ${({ theme }) => theme.primary};
  }
`;

const StInputArea = styled.div`
  width: 100%;
  padding: 1.3rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 1rem;
  border-width: 0;
  background: #f5f5f5;
`;

const StInputContentsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.6rem;

  width: 100%;

  @media ${mediaBreakpoint.tablet} {
    column-gap: 1rem;
  }
`;

const StSearchBarInput = styled.input`
  width: 100%;
  padding: 0;
  border: none;

  color: ${({ theme }) => theme.gray100};
  text-align: start;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  background: inherit;

  &::placeholder {
    color: #666;
  }

  @media ${mediaBreakpoint.tablet} {
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
  }
`;

const StSearchBarCancelBtn = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  background-color: transparent;

  position: relative;
`;
