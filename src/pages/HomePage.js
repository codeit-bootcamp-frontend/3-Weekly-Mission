import "./HomePage.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <div className="tempIndex">
        임시 인덱스페이지 입니다.
        <br />
        <br />
        <a href="/shared">/shared로 이동</a>
        <br />
        <a href="/folder">/folder로 이동</a>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
