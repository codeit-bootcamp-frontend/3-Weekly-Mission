import styled from "styled-components";

const commonMainStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.6rem;
  border-radius: 0.8rem;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-gray-10, #e7effb);
  padding: 2.4rem;
`;

export const MainDiv = styled.div`
  ${commonMainStyle};
`;

export const Text = styled.div`
  ${commonMainStyle};
  color: var(--color-gray5, #3e3e43);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SNS = styled.div`
  ${commonMainStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button``;
