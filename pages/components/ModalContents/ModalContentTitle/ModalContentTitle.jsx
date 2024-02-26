import styled from 'styled-components';

export const ModalContentTitle = ({ children }) => {
  return <ModalTitle>{children}</ModalTitle>;
};

const ModalTitle = styled.h2`
  color: var(--gray100);
  font-size: 2.4rem;
  font-weight: 700;
  font-family: 'pretentdard';
`;
