import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Folder from "./pages/Folder";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/shared"
                        element={
                            <>
                                <Header />
                                <Nav />
                                <SearchBar />
                                <CardList />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/folder" element={<Folder />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
