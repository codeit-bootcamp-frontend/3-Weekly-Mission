import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import FolderPage from "pages/FolderPage";
import SharedPage from "pages/SharedPage";
import HomePage from "pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
