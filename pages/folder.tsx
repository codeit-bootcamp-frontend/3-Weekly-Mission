import AddLinkBar from "@/components/folder/AddLinkBar";
import Content from "@/components/folder/Content";
import SearchBar from "@/components/common/SearchBar";
import Header from "@/components/common/Header";
import { useMemo, useState } from "react";
import Footer from "@/components/common/Footer";
import {
  UserData,
  UserFolderLinkData,
  UserFolder,
  getUser,
  getUserFolderList,
  getUserLinkList,
} from "@/api/api";
import { USER_ID } from "./shared/[folderId]";

type Props = {
  linkList: UserFolderLinkData[];
  user: UserData;
  folderList: UserFolder[];
};

export async function getServerSideProps() {
  const [linkList, user, folderList] = await Promise.all([
    getUserLinkList(),
    getUser(USER_ID),
    getUserFolderList(USER_ID),
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
      <AddLinkBar folderList={folderList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Content folderLinkList={searchedData} folderList={folderList} />
      <Footer />
    </>
  );
}
