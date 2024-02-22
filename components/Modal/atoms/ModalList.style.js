import styled from "styled-components";

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

`;

export const ListItem = styled.li`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 8px;
  background: ${props => props.$isSelected
          ? "var(--Linkbrary-bg, #F0F6FF)"
          : "none"};

  article {
    display: flex;
    width: 264px;
    align-items: center;
    gap: 8px;

    h5 {

      color: ${props => props.$isSelected
              ? "var(--Linkbrary-primary-color, #6D6AFE)"
              : "var(--Linkbrary-gray100, #373740)"};

      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    p {
      color: var(--Linkbrary-gray60, #9FA6B2);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  & :hover {
    background: var(--Linkbrary-bg, #F0F6FF);

    h5 {
      color: var(--Linkbrary-primary-color, #6D6AFE);
    }
  }
`
