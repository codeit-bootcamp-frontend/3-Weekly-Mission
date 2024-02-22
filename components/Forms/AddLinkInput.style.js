import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6D6AFE);
  background: var(--Linkbrary-white, #FFF);
`;

export const SuggestionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  `;

export const ElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

`;


export const LinkImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const Input = styled.input`
  color: var(--Linkbrary-gray60, #9FA6B2);
  font-family: Pretendard, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  
  &::placeholder {
    
  }
`;

export const Button = styled.button`
  color: var(--Grey-Light, #F5F5F5);
  font-family: Pretendard, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;


  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%));

`;
