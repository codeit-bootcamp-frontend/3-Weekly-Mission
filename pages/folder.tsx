import AddLinkBar from "@/components/AddLinkBar";
import Content from "@/components/Content";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import {
  getUser,
  getUserFolder,
  getUserFolderList,
  getUserLinkList,
} from "@/api/api";
import { USER_ID, UserData } from "./shared/[folderid]";

export interface UserFolderData {
  id: number;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
}
type Props = { linkList: UserFolderData[]; user: UserData; folderList: any[] };

export async function getServerSideProps() {
  const [linkList, user, folderList] = await Promise.all([
    getUserLinkList(),
    getUser(USER_ID),
    getUserFolderList("8"),
  ]);
  return { props: { linkList, user, folderList } };
}

export default function Folder({
  linkList: userFolderLinks,
  user,
  folderList,
}: Props) {
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
      <Header
        isSticky
        profileImageSource={user.image_source}
        email={user.email}
      />
      <AddLinkBar />
      <SearchBar handleInputChange={handleInputChange} />
      <Content folderLinkList={searchedData} folderList={folderList} />
      <Footer />
    </>
  );
}
