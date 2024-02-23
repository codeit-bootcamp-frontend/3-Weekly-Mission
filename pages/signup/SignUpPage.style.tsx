import styled from "styled-components";

export const Form = styled.form`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  margin: 3rem 0 0 0;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  background: var(
    linear-gradient(
      91deg,
      var(--color-primary, #6d6afe) 0.12%,
      #6ae3fe 101.84%
    ),
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
