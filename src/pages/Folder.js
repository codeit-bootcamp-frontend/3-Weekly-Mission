import AddLinkBar from "../components/AddLinkBar";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Folder() {

  return (
    <>
      <Header page="folder"/>
      <AddLinkBar />
      <SearchBar />
      <Content />
      <Footer />
    </>
  );
}
