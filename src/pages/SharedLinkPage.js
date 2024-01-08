import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

function SharedLinkPage() {
  const isShared = true;
  return (
    <>
      <Navbar isShared={isShared} />
      <Header></Header>
      <SearchBar />
    </>
  );
}

export default SharedLinkPage;
