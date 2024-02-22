import styled from "styled-components";

const commonMenuStyle = `
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  z-index: 500;
  right: -7rem;
  bottom: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.3rem var(--color-gray2, #e7effb;);
`;

export const MenuDiv = styled.div`
  ${commonMenuStyle};
`;

export const MenuButton = styled.button`
  ${commonMenuStyle};
  padding: 1rem;
  width: 100%;
  height: 100%;

  &:hover {
    color: var(--color-primary, #6d6afe);
    background: var(--color-linkbrary, #e7effb);
  }
`;

export const KebabDiv = styled.div`
  display: relative;
`;

export const KebabButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  z-index: 500;
  bottom: 33%;
  right: 1rem;
`;
