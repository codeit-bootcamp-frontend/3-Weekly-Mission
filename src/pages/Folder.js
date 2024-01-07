import React from "react";
import FolderHeader from "../components/FolderHeader";
import LinkForm from "../components/LinkForm";
import SearchBar from "../components/SearchBar";
import FolderBar from "../components/FolderBar";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

function Folder() {
    return (
        <div className="Folder">
            <FolderHeader />
            <LinkForm />
            <SearchBar />
            <FloatingActionButton />
            <FolderBar />
            <Footer />
        </div>
    );
}

export default Folder;
