import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shared() {
  return (
    <>
      <Header />
      <Banner />
      <SearchBar />
      <Cards />
      <Footer />
    </>
  );
}
