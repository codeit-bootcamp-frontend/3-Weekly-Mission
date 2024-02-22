import styled from "styled-components";
import lensIcon from "../../assets/icons/icon-lens.svg";

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  margin-bottom: 40px;
`;
export const SearchBar = styled.input`
  display: flex;
  width: 1060px;
  padding: 15px 16px 15px 42px;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 10px;
  background: #F5F5F5 url("/icons/icon-lens.svg") no-repeat 16px center;
`;

export const SearchText = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;

  span {
    color: var(--Linkbrary-gray60, #9FA6B2);
  }
`;
