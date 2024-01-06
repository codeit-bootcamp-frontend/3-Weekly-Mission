import Header from "../components/Header/Header";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const STYLED_DIV = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  max-width: 1060px;
  height: 100px;
  margin: 0 auto;
  padding: 41px 0 35px;
  margin-bottom: 40px;
`;

function FolderEmpty() {
  return (
    <>
      <Header notFixed />
      <AddLink />
      <Search />
      <STYLED_DIV>저장된 링크가 없습니다</STYLED_DIV>
      <Footer />
    </>
  );
}

export default FolderEmpty;
