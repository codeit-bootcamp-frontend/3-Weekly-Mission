import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SearchBar from "@/components/SearchBar";
import Cards from "@/components/Cards";
import { getUser, getUserFolder, getUserFolderLinkList } from "@/api/api";
import { UserFolderData } from "../folder";

export interface FolderData {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface UserFolderLinkData {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export const USER_ID = "8";

export async function getServerSideProps(context: {
  query: { folderId: string };
}) {
  const { folderId } = context.query;
  const [folder, user, folderLinkList] = await Promise.all([
    getUserFolder(folderId),
    getUser(USER_ID),
    getUserFolderLinkList(folderId),
  ]);
  return { props: { folder, user, folderLinkList } };
}

export default function Shared({
  folder: folderData,
  user,
  folderLinkList,
}: {
  folder: FolderData;
  user: UserData;
  folderLinkList: UserFolderLinkData[];
}) {
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: string) => {
    setsearchValue(value);
  };

  const searchedData = useMemo(() => {
    return folderLinkList?.filter((item: UserFolderData) => {
      if (
        item.description.includes(searchValue) ||
        item.url.includes(searchValue) ||
        item.title.includes(searchValue)
      ) {
        return item;
      }
    });
  }, [folderLinkList, searchValue]);
  return (
    <>
      <Header profileImageSource={user.image_source} email={user.email} />
      <Banner folder={folderData} user={user} />
      <SearchBar handleInputChange={handleInputChange} />
      <Cards data={searchedData} />
      <Footer />
    </>
  );
}
