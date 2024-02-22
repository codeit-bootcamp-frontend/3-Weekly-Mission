import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  padding: 3.2rem 4rem;
`;

export const Title = styled.h2`
  color: #373740;
  font-size: 2rem;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 28rem;
  border-radius: 0.8rem;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  padding: 1.6rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  color: #9fa6b2;
`;

export const Button = styled.button`
  width: 28rem;
  color: white;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  font-weight: 600;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;
