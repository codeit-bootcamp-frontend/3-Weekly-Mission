import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  top: 32px;
  left : 1px;
  z-index: 10;
  white-space: nowrap;
 
  
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  background: var(--gray-light-gray-00, #FFF);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.10);

  li {
    display: flex;
    padding: 7px 12px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    color: var(--gray-light-gray-100, #333236);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;


    &:hover {
      background: var(--Linkbrary-gray10, #E7EFFB);
      color: var(--Linkbrary-primary-color, #6D6AFE);
      cursor: pointer;
    }

  }
`;




