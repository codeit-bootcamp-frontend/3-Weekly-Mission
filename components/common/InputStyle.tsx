import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background-color: #fff;
  color: #373740;
  overflow: hidden;

  &:focus-within {
    border: 1px solid #6d5afe;
  }

  &[data-isError="true"] {
    border: 1px solid #ff5b56 !important;
  }
`;

export const Input = styled.input`
  padding: 18px 15px;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Button = styled.button`
  margin-right: 16px;
  border: none;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  cursor: pointer;
`;

export const Span = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  color: #ff5b56;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
`;
