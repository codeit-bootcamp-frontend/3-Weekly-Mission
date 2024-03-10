import { useMemo, useState } from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Banner from "@/components/shared/Banner";
import SearchBar from "@/components/common/SearchBar";
import Cards from "@/components/shared/Cards";
import { getUser, getUserFolder, getUserFolderLinkList } from "@/api/api";
import type { FolderData, UserData, UserFolderLinkData } from "@/api/api";

export const USER_ID = "1";

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
    return folderLinkList?.filter((item) => {
      if (
        item.description?.includes(searchValue) ||
        item.url?.includes(searchValue) ||
        item.title?.includes(searchValue)
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
