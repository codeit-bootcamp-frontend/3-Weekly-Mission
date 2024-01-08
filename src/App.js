import React from "react";
import Folder from "./pages/Folder/Folder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared/Shared";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Folder />} />
        {/* 메인페이지가 없어서 일시적으로 폴더페이지를 메인으로 */}
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
}
