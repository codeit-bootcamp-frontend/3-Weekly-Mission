import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function App() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
