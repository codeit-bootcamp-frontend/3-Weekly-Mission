import styled from "styled-components";

export const CategoryButton = styled.button`

  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6D6AFE);
  background: ${({$isSelected}) => $isSelected
          ? "var(--Linkbrary-primary-color, #6D6AFE)" : "#FFF"};

  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({$isSelected}) => $isSelected ? "#FFF" : "#000"};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
  }

`;
