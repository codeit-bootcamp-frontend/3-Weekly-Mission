import styled from 'styled-components';

/**
 *
 * @description 모달 라벨용
 */
const StModalLabel = styled.label<{ $rowGap?: number }>`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ $rowGap = 2.4 }) => $rowGap}rem;

  width: 100%;
`;

export { StModalLabel };
