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

export const SNS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Span = styled.span`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;
