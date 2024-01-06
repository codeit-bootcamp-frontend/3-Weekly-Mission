import "./Folder.css";
import Header from "../components/Header/Header";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import UserSection from "../components/UserSection/UserSection";
import Footer from "../components/Footer/Footer";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";

function Folder() {
  return (
    <>
      <Header notFixed />
      <AddLink />
      <Search />
      <UserSection />
      <FloatingActionButton />
      <Footer />
    </>
  );
}

export default Folder;
