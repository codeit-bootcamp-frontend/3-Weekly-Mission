import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-gray1);
  padding: 2rem 3.2rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  gap: 1rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  gap: 1rem;
  text-align: center;

  &.img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`;

export const User = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
`;

export const Folder = styled.div`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
