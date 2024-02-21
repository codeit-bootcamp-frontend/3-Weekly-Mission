import styled from "styled-components";

const color = {
  default: "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))",
  alert: "var(--Linkbrary-red, #FF5B56)"
}

export const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--Grey-Light, #F5F5F5);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border-radius: 8px;
  background: ${props => color[props.$buttonType] ?? color.default};
`;
