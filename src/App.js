import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import "./reset.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="app-body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
