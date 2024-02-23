import styled, { css } from "styled-components";

interface NavProps {
  isSticky?: boolean;
}

export const Nav = styled.nav<NavProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 50rem;
  background-color: var(--color-gray1, #f0f6ff);
  padding: 2rem 3.2rem;
  z-index: 500;

  ${(props) =>
    props.isSticky &&
    css`
      position: sticky;
      top: 0;
      left: 0;
    `}

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;

  @media (min-width: 768px) {
    max-width: 80rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 2rem;
  border: none;
  border-radius: 0.8rem;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, var(--color-primary) 0.12%, #6ae3fe 101.84%) ;
  );
`;

export const User = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Span = styled.span`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
