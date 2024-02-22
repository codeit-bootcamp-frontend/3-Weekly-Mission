import styled from "styled-components";

export const MainDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10.1rem;
  width: 100%;
  z-index: 700;

  @media (min-width: 768px) {}
    position: absolute;
    top: 45rem;
    height: 0;
  }
`;

export const Button = styled.button`
  z-index: 700;
  padding: 0.8rem 2.4rem;
  gap: 2rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  background-color: var(--color-primary);
  color: white;

  @media (min-width: 768px) {}
    color: var(--color-primary);
    background-color: transparent;
    position: absolute;
    right: 4rem;
  }
`;
