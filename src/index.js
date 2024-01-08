import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SharedLinkPage from "./pages/SharedLinkPage";
import FolderPage from "./pages/FolderPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shared" element={<SharedLinkPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
