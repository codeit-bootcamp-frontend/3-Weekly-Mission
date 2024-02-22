import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  z-index: var(--zIndex-least-value);
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--linkbrary-bg, #F0F6FF);
  padding: 20px 200px;
    `;
