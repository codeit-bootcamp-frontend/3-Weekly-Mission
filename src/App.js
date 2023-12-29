import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FolderInfo from "./components/FolderInfo";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
  
  }
  a {
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FolderInfo />
      <Footer />
    </>
  );
}
