import AddLinkBar from "@/components/AddLinkBar";
import Content from "@/components/Content";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import { getUser, getUserFolder } from "@/api";

export interface UserFolderData {
  id: number;
  createdAt?: string;
  created_at?: string;
  updated_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
}

interface FolderProps {
  image_source: string;
  email: string;
  data: UserFolderData[];
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const [{ data }, { image_source, email }] = await Promise.all([
    getUserFolder(id),
    getUser(id),
  ]);

  return {
    props: {
      image_source,
      email,
      data,
    },
  };
}

export default function Folder({
  image_source,
  email,
  data: userFolderLinks,
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
      <Content folderLinkList={searchedData} />
      <Footer />
    </>
  );
}
