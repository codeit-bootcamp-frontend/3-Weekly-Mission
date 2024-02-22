import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 4rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 500px;
    width: 1060px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  height: 0;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 0;
  gap: 1rem;
`;
