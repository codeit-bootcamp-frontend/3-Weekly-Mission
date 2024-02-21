import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .color-bg {
    width: 100%;
    background: #F0F6FF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .contents-header {
    max-width: 1920px;
    padding: 70px 360px 0 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    overflow: hidden;
  }

  .contents-header .text {
    text-align: center;
    font-family: Pretendard, serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 125% */
    color: #000;
  }

  br.invisible-pc {
    display: none;
  }

  .text-gradation-type-head {
    background: linear-gradient(91deg, #6D6AFE 17.28%, #FF9F9F 74.98%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradation-type-a {
    background: linear-gradient(96deg, #FE8A8A 1.72%, #A4CEFF 74.97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradation-type-b {
    background: linear-gradient(277deg, #6FBAFF 59.22%, #FFD88B 93.66%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradation-type-c {
    background: linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradation-type-d {
    background: var(--fandom-k-gra-blue-to-pink);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }


  .contents-header .button {
    display: flex;
    width: 350px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--gra-purpleblue-to-skyblue);
    border: 0;

    color: var(--grey-light);
    font-family: Pretendard, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  section.features-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 120px;
    gap: 50px;
  }

  .contents-header img {
    width: 1118px;
    height: 659px;
    flex-shrink: 0;

    border-radius: 25px;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0.00) 67.68%, #F0F6FF 94.76%);
  }

  .feature {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .feature-box {
    display: flex;
    align-items: center;
    gap: 157px;
  }

  .feature-text {
    display: flex;
    width: 291px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .text-subject {
    font-family: Pretendard, serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;
    margin: 0;
  }

  .text-content {
    color: #6B6B6B;
    font-family: Abel;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }

  .screenshot-content {
    position: relative;
    width: 550px;
    height: 450px;
    border-radius: 15px;
    background: #F0F6FF;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.08);
  }

  .screenshot-content.large-content {
    width: 570px;
    height: 469px;
    flex-shrink: 0;
    border-radius: 20px;
    /*background: rgba(0, 0, 0, 0.40);*/
    /*box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);*/
  }

  .blurred-black {
    filter: brightness(0.5);
    border-radius: 20px;
  }

  .folder-popup {
    position: absolute;
    left: 68px;
    top: 114px;
    width: 414px;
    height: 270px;
    flex-shrink: 0;
  }

  .share-popup {
    position: absolute;
    top: 112px;
    left: 67px;
    width: 416px;
    height: 271px;
    flex-shrink: 0;
  }


`;


