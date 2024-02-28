import Footer from "components/footer";
import { Outlet } from "react-router-dom";
import "styles/App.css";

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
