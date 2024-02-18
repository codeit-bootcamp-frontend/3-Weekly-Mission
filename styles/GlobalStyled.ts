import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* color */
  --Linkbrary-primary-color: #6d6afe;
  --gra-purplebule-to-skyblue: #6ae3fe;
  --Linkbrary-white: #ffffff;
  --Linkbrary-red: #ff5b56;
  --The-julge-black: #111322;
  --Grey-Light: #f5f5f5;
  --Linkbrary-gray10: #e7effb;
  --Linkbrary-gray20: #ccd5e3;
  --Linkbrary-gray100: #373740;
  --Linkbrary-gray60: #9fa6b2;
  --Linkbrary-bg: #f0f6ff;

  /* font-size */
  --btn-font-size: 1.8rem;
  --title-font-size: 6.4rem;
  --side-title-font-size: 4.8rem;
  --shared-header-h2-font-size: 4rem;
  --small-font-size: 1.6rem;
  --label-font-size: 1.4rem;

  /* font-weight */
  --small-font-weight: 400;
  --basic-font-weight: 600;
  --big-font-weight: 700;

  /* font-family */
  --basic-font-family: Pretendard;
}

@media screen and (max-width: 768px) {
  :root {
    --btn-font-size: 1.4rem;
    --title-font-size: 3.2rem;
    --side-title-font-size: 2.4rem;
    --small-font-size: 1.5rem;
    --label-font-size: 1.4rem;
  }
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
}

html,
body {
    font-size: 62.5%;
    font-style: normal;
    line-height: normal;
    background: var(--Linkbrary-bg);
    font-weight: var(--basic-font-weight);
}

a {
    color: var(--Linkbrary-white);
    text-decoration: none;
    cursor: pointer;
}

button {
    color: var(--Linkbrary-white);
    cursor: pointer;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
}

`;

export default GlobalStyle;
