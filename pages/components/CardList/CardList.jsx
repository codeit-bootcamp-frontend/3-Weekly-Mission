import { forwardRef } from 'react';
import styled from 'styled-components';

export const CardList = forwardRef(({ children }, ref) => {
  return <CardListContainer ref={ref}> {children}</CardListContainer>;
});

const CardListContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  max-width: 106rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 34rem);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;
