import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import useGetFolderAsync, { ILinks } from "../hooks/useGetFolderAsync";
import { useEffect, useState } from "react";
export default function Shared() {
  const [searchValue, setsearchValue] = useState("");
  const data = useGetFolderAsync();
  const [searchedData, setSearchedData] = useState();
  const handleInputChange = (value) => {
    setsearchValue(value);
  };

  useEffect(() => {
    const newDatas =
      data?.links?.filter(
        (item) => {
    if (
      item.description.includes(searchValue) ||
      item.url.includes(searchValue) ||
      item.title.includes(searchValue)
    ) {
      return item;
    }
  }
      );
  setSearchedData(newDatas);
}, [data?.links, searchValue]);

return (
  <>
    <Header isSticky />
    <Banner />
    <SearchBar handleInputChange={handleInputChange} />
    <Cards data={searchedData} />
  </>
);
}
