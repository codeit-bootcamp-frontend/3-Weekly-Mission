import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    
    img {
      width: 42px;
      height: 42px;
    }
    p{
      color: var(--Linkbrary-gray100, #373740);
      text-align: center;
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 15px; /* 115.385% */
    }
  }
`;
