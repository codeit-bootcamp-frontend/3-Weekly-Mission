import { useState } from "react";
import Searchbar from "@/components/Searchbar";
import SharedCardlist from "@/components/SharedComponents/SharedCardlist";
import SearchKeywordResult from "@/components/SearchKeywordResult";

interface SharedContentProps {
  links: SharedFolderLinksData[];
}

export default function SharedContent({ links }: SharedContentProps) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeywordChange = (changeSearchKeyword: string) => {
    setSearchKeyword(changeSearchKeyword);
  };

  return (
    <main>
      <Searchbar handleSearchKeywordChange={handleSearchKeywordChange} />
      {searchKeyword && <SearchKeywordResult searchKeyword={searchKeyword} />}
      <SharedCardlist links={links} searchKeyword={searchKeyword} />
    </main>
  );
}
