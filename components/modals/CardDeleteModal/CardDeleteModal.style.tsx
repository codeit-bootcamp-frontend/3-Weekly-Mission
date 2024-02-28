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

export const Button = styled.button`
  width: 28rem;
  color: white;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  background-color: var(--color-red);
`;
