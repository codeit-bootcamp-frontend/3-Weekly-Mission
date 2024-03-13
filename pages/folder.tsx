import AddLinkBar from "@/components/folder/AddLinkBar";
import Content from "@/components/folder/Content";
import SearchBar from "@/components/common/SearchBar";
import Header from "@/components/common/Header";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/common/Footer";
import {
  UserData,
  UserFolderLinkData,
  UserFolder,
  getUser,
  getUserFolderList,
  getUserLinkList,
  getUserFolderLinkList,
  UserLinkData,
} from "@/api/api";
import { USER_ID } from "./shared/[folderId]";

type Props = {
  user: UserData;
  folderList: UserFolder[];
  folderLinkList: UserFolderLinkData[];
};

export async function getServerSideProps() {

  const [user, folderList, folderLinkList] = await Promise.all([
    getUser(USER_ID),
    getUserFolderList(USER_ID),
    getUserLinkList(USER_ID),
  ]);
  return { props: { user, folderList, folderLinkList } };
}

export default function Folder({
  user,
  folderList,
  folderLinkList: userLinks,
}: Props) {
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: string) => {
    setsearchValue(value);
  };
  const searchedData = useMemo(() => {
    return userLinks?.filter((item) => {
      if (
        item.description?.includes(searchValue) ||
        item.url?.includes(searchValue) ||
        item.title?.includes(searchValue)
      ) {
        return item;
      }
    });
  }, [userLinks, searchValue]);
  return (
    <>
      <Header
        isSticky
        profileImageSource={user.image_source}
        email={user.email}
      />
      <AddLinkBar folderList={folderList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Content searchedLinkList={searchedData} folderList={folderList}/>
      <Footer />
    </>
  );
}
