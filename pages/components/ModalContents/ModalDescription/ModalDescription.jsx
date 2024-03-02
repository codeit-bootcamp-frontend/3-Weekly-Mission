import styled from 'styled-components';

export const ModalDescription = ({ children }) => {
  return <Description>{children}</Description>;
};

const Description = styled.p`
  color: var(--gray60);
  font-size: 1.4rem;
  line-height: 2.2rem;
`;
