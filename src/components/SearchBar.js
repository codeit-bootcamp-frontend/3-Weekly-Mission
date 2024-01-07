import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar-box">
            <form className="search-bar" onSubmit={handleSearch}>
                <img src="/images/Search.png" alt="Search" />
                <input
                    type="text"
                    placeholder="링크를 검색해 보세요."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;
