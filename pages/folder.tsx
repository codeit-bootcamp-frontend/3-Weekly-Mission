import AddLinkBar from "../components/AddLinkBar";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import useGetUserFolder from "../hooks/useGetUserFolder";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import { getUser } from "@/api";

export async function getServerSideProps() {
  const { data } = await getUser();
  const { image_source, email } = data[0];

  return {
    props: {
      image_source,
      email,
    },
  };
}

interface FolderProps {
  image_source: string;
  email: string;
}

export default function Folder({ image_source, email }: FolderProps) {
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
      <Header isSticky profileImageSource={image_source} email={email} />
      <AddLinkBar />
      <SearchBar handleInputChange={handleInputChange} />
      <Content folderLinkList={searchedData} />
      <Footer />
    </>
  );
}
