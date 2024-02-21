import styled from 'styled-components';

const StMenuButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem 1.2rem;
  width: 100%;

  background-color: initial;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: var(--Linkbrary-gray10, #e7effb);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

export { StMenuButton };
