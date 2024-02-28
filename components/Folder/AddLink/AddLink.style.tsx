import styled from "styled-components";

const commonBackground = `
  background-color: var(--linkbrary-bg, #f0f6ff);
`;

export const AddLink = styled.div`
  ${commonBackground};
`;

export const AddLinkForm = styled.form`
  ${commonBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.div`
  ${commonBackground};
  position: relative;
  max-width: 106rem;
  width: 100%;
  min-width: 50rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 6rem;
  margin: 6rem auto;
  border: none;
  border-radius: 0.8rem;
  padding: 0 5rem;
`;

export const FormButton = styled.button`
  position: absolute;
  text-align: center;
  width: 80px;
  padding: 10px 16px;
  top: 7rem;
  right: 2rem;
  border: none;
  border-radius: 8px;
  color: white;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;
