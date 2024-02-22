import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 800;
  bottom: 10.1rem;

  @media (min-width: 768px) {
    position: absolute;
    top: 45rem;
    height: 0;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  background-color: var(--color-primary, #6d6afe);
  color: white;
  z-index: 800;
  padding: 0.8rem 2.4rem;
  border-radius: 2rem;
  gap: 2rem;

  @media (min-width: 768px) {
    position: absolute;
    color: var(--color-primary, #6d6afe);
    background-color: transparent;
    right: 4rem;
  }
`;
