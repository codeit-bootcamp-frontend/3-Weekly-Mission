import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { useMemo, useState } from "react";
import { getSampleFolder, getSampleUser } from "@/api";
import Footer from "@/components/Footer";
import type { UserFolderData } from "@/hooks/useGetUserFolder";

export interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: UserFolderData[];
}

export async function getServerSideProps() {
  const { folder } = await getSampleFolder();
  const data = await getSampleUser();
  const { profileImageSource, email } = data;
  return { props: { profileImageSource, email, folder } };
}

interface SharedProps {
  folder: SampleFolder;
  profileImageSource: string;
  email: string;
}

export default function Shared({
  folder: sampleFolderLinkList,
  profileImageSource,
  email,
}: SharedProps) {
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: any) => {
    setsearchValue(value);
  };

  const searchedData = useMemo(() => {
    return sampleFolderLinkList?.links?.filter((item: UserFolderData) => {
      if (
        item.description.includes(searchValue) ||
        item.url.includes(searchValue) ||
        item.title.includes(searchValue)
      ) {
        return item;
      }
    });
  }, [sampleFolderLinkList?.links, searchValue]);
  return (
    <>
      <Header profileImageSource={profileImageSource} email={email} />
      <Banner folder={sampleFolderLinkList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Cards data={searchedData} />
      <Footer />
    </>
  );
}
