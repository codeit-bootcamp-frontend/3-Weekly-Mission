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

export const Description = styled.span`
  color: #9fa6b2;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 28rem;
  padding: 0.8rem;
  gap: 1rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &.checked {
    border-radius: 0.8rem;
    color: var(--linkbrary-primary-color, #6d6afe);
    background-color: #f0f6ff;
  }
`;

export const Count = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
