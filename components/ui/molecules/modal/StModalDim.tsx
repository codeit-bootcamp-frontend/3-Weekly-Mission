import styled from 'styled-components';

/**
 * @description 배경용
 */
const StModalDim = styled.div`
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed; // static만 아니면 다 기준이 돼서
  inset: 0;
`;

export { StModalDim };
