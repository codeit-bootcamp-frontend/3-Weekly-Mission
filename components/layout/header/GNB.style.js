import styled from "styled-components";

export const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  img {
    width: 133px;
    height: 24px;
  }


  .button {
    display: flex;
    width: 128px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--gra-purpleblue-to-skyblue);

    color: #F5F5F5;
    font-family: Pretendard, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .login-success {
    display: flex;
    align-items: center;
    gap: 6px;

    color: var(--linkbrary-gray-100, #373740);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .login-success img {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`;
