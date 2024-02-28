import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: block;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.8rem 1.5rem;
  background-color: white;
  border-radius: 0.8rem;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);

  &:focus {
    outline: 1px solid var(--linkbrary-primary-color, #6d6afe);
  }

  &[data-status="Error"] {
    outline: 1px solid #ff5b56;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 5px;
  top: 63%;
  transform: translate(-50%, -50%);
`;

export const Error = styled.div`
  padding-top: 1rem;
  color: var(--linkbrary-red, #ff5b56);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 0;
`;
