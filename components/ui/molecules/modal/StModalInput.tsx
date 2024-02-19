import styled from 'styled-components';

const StModalInput = styled.input.attrs<{ $inputColor?: string }>({ type: 'text' })`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1.8rem 1.5rem;

  border-radius: 0.8rem;
  // 고정을 시킬까? 🤔
  border: 1px solid ${({ theme, $inputColor = 'gray20' }) => theme[$inputColor]};

  color: var(--Linkbrary-gray100, #373740);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */

  &:where(:focus, :active) {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: var(--Linkbrary-gray60, #9fa6b2);
  }
`;

export { StModalInput };
