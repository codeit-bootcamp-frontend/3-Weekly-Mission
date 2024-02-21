import styled from 'styled-components';

/**
 *
 * @description 모달용 박스
 */
// const StModalWrapper = styled.div<{ $rowGap?: number }>`
const StModalWrapper = styled.form<{ $rowGap?: number }>`
  width: 36rem;
  padding: 3.2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ $rowGap = 1.5 }) => $rowGap}rem;

  position: relative;
  border-radius: 1.5rem;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;

export { StModalWrapper };
