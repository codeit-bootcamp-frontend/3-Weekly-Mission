import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Folder />} />
        <Route path="/Shared" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}
