import AddLinkBar from "@/components/AddLinkBar";
import Content from "@/components/Content";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import { getUser, getUserFolder, getUserFolderList } from "@/api/api";

export interface UserFolderData {
  id: number;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
}
interface FolderProps {
  image_source: string;
  email: string;
  data: UserFolderData[];
  linkList: any[];
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const [{ data }, { image_source, email }, linkList] = await Promise.all([
    getUserFolder(id),
    getUser(id),
    getUserFolderList(id),
  ]);

  return {
    props: {
      image_source,
      email,
      data,
      linkList,
    },
  };
}

export default function Folder({
  image_source,
  email,
  data: userFolderLinks,
  linkList,
}: FolderProps) {
  const [searchValue, setsearchValue] = useState("");
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
      <Content folderLinkList={searchedData} linkList={linkList} />
      <Footer />
    </>
  );
}
