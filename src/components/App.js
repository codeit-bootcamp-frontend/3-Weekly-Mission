import "./App.css";
import Shared from "../pages/Shared";
import Folder from "../pages/Folder";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/shared" element={<Shared />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;