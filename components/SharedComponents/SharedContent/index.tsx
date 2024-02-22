import { useState } from "react";
import Searchbar from "@/components/Searchbar";
import Cardlist from "@/components/Cardlist";
import SearchKeywordResult from "@/components/SearchKeywordResult";
import { FolderLinksData } from "@/pages/shared";

interface SharedContentProps {
  links: FolderLinksData;
}

function SharedContent({ links }: SharedContentProps) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeywordChange = (changeSearchKeyword: string) => {
    setSearchKeyword(changeSearchKeyword);
  };

  return (
    <main>
      <Searchbar handleSearchKeywordChange={handleSearchKeywordChange} />
      {searchKeyword && <SearchKeywordResult searchKeyword={searchKeyword} />}
      <Cardlist links={links} searchKeyword={searchKeyword} />
    </main>
  );
}

export default SharedContent;
