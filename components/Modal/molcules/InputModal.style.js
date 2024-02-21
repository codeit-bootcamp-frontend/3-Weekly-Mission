import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #CCD5E3);
  background: var(--Linkbrary-white, #FFF);
  
  &:focus{
    border: 1px solid var(--Linkbrary-primary-color, #6D6AFE);
  }
`;
