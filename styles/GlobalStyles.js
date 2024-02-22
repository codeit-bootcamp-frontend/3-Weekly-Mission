import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --linkbrary-primary-color: #6D6AFE;
    --linkbrary-red: #FF5B56;
    --the-julge-black: #111322;
    --linkbrary-white: #FFFFFF;
    --linkbrary-gray-100: #3E3E43;
    --linkbrary-gray-60: #9FA6B2;
    --linkbrary-gray-20: #CCD5E3;
    --linkbrary-gray-10: #E7EFFB;
    --linkbrary-bg: #F0F6FF;
    --grey-light: #F5F5F5;
    --gray-700: #3A3A3A;
    --gra-purpleblue-to-skyblue: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
    --fandom-k-gra-blue-to-pink: linear-gradient(271deg, #FE578F -9.84%, #68E8F9 107.18%);
    --zIndex-least-value: 1;
    --text-color-light-mode: #000000;
    --primary-purple-70: #8F00FF;
  }

  ${reset}  ; // reset css;

  * {
    box-sizing: border-box;
    margin: 0;
  }

  a[href] {
    text-decoration: none;
  }

  .app {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: var(--gray-700, #3A3A3A);
    cursor: pointer;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
