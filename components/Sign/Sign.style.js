import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  width: 100%;
  background: var(--Linkbrary-bg, #F0F6FF);
  display: flex;
  justify-content: center;
  padding-top: 238px;
  padding-bottom: 238px
`;

export const Sign = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .form-login-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .sign-text {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .sign-text .ask-member {
    margin: 0;
    color: var(--black);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  .signup-link {
    color: var(--linkbrary-primary-color, #6D6AFE);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .input-box-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }


  .input-box > label {
    color: var(--black);
    font-family: Pretendard, serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input {
    display: flex;
    width: 400px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--linkbrary-gray-20, #CCD5E3);
    background: var(--linkbrary-white);
  }

  input:focus, input:hover {
    border: 1px solid var(--linkbrary-primary-color);
  }

  .alert {
    color: var(--Linkbrary-red, #FF5B56);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;  }


  .password-box {
    position: relative;
  }

  .password-box > img {
    position: absolute;
    top: 18px;
    right: 15px;
  }

  button {
    display: flex;
    width: 400px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-width: 0;
    border-radius: 8px;
    background: var(--gra-purpleblue-to-skyblue);

    color: var(--grey-light, #F5F5F5);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

  }

  .social-login-area {
    display: flex;
    width: 400px;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--linkbrary-gray-20, #CCD5E3);
    background: var(--linkbrary-gray-10, #E7EFFB);
  }

  .social-login-area > .text {
    color: var(--linkbrary-gray-100, #373740);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .social-login-area .icon-box-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .icon-box {
    position: relative;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  #google-icon-box, #kakao-icon-box {
    width: 42px;
  }

  img[alt=icon] {
    position: absolute;
    top: 10px;
  }

  #google-icon {
    left: 10px;
  }

  #kakao-icon {
    left: 8px;
  }


`
