import AddLinkBar from "../components/AddLinkBar";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import useGetUserFolder from "../hooks/useGetUserFolder";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";

export default function Folder() {
  const [searchValue, setsearchValue] = useState("");
  const userFolderLinks = useGetUserFolder();
  const handleInputChange = (value: string) => {
    setsearchValue(value);
  };

  const searchedData = useMemo(() => {
    return userFolderLinks?.filter((item) => {
      if (
        item.description?.includes(searchValue) ||
        item.url?.includes(searchValue) ||
        item.title?.includes(searchValue)
      ) {
        return item;
      }
    });
  }, [userFolderLinks, searchValue]);

  return (
    <>
      <Header isSticky />
      <AddLinkBar />
      <SearchBar handleInputChange={handleInputChange} />
      <Content userFolderLinks={searchedData} />
      <Footer />
    </>
  );
}
