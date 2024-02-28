import styled from "styled-components";

export const NoList = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 24px;
  padding: 12rem 0 20rem;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 4rem auto;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }
`;
