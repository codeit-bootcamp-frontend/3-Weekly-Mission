import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import "./assets/pretendard.css";

import NotFoundPage from "./pages/NotFoundPage";
import GlobalStyle from "./globalStyle/GlobalStyle";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/shared/" element={<SharedPage />} />
                <Route path="/shared/*" element={<SharedPage />} />
                <Route path="/folder" element={<FolderPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
