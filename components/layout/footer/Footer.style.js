import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  height: 280px;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 30px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.02);
  
  .footer-area {
    display: flex;
    height: auto;
    padding: 32px 104px 64px 104px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;

    background: var(--the-julge-black);

    font-family: Arial, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .footer-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .footer-box .company {
    color: #676767;
    text-align: center;
  }

  .footer-text {
    color: #CFCFCF;
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  .footer-text a:visited {
    color: #676767;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .screenshot-search {
    position: absolute;
    top: 55px;
    left: 60px;

    width: 619px;
    height: 584px;
    flex-shrink: 0;
    border-radius: 15px;
  }

  a[href] {
    cursor: pointer;
    color: white;
  }

`;

