import styled from 'styled-components';

export const Background = styled.div`
  z-index: 999;
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.40);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.08);
`;

export const ModalContent = styled.div`
  min-width: 300px;
  min-height: 200px;
  background: #FFFFFF;
  
  
  position: relative;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #CCD5E3);
  background: var(--Linkbrary-white, #FFF);
  
 
`;

export const Header = styled.header`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 20px;
  font-weight: 700;
`;

export const SubHeader = styled.header`
  color: var(--Linkbrary-gray60, #9FA6B2);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  
  margin-top: 8px;
`;




export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
