import readingGlasses from "assets/Search.svg";
import { useState, useEffect } from "react";

function MainSearch({ setSearch }: any) {
  const [inputValue, setInputValue] = useState("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
    
  };
  useEffect(()=>{
    setSearch(inputValue);
  }, [inputValue])
  
  return (
    <div className="MainSearch">
      <input
        value={inputValue}
        onChange={handleChange}
        className="searchBar"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      <img
        className="readingGlasses"
        src={readingGlasses}
        alt="readingGlasses"
      />
    </div>
  );
}

export default MainSearch;
