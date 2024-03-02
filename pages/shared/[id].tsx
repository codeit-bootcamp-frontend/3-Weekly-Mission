import { useMemo, useState } from "react";
import { getSampleData, getUser } from "@/api";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SearchBar from "@/components/SearchBar";
import Cards from "@/components/Cards";
import type { UserFolderData } from "../folder/[id]";
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

interface SharedProps {
  folder: SampleFolder;
  image_source: string;
  email: string;
}

export async function getServerSideProps(context: {
  query: { id: string };
}) {
  const { id } = context.query;
  const [ {folder} , { image_source, email }] = await Promise.all([
    getSampleData('/sample/folder'),
    getUser(id),
  ]);
  console.log(folder);
  return { props: { image_source, email, folder } };
}

export default function Shared({
  folder: sampleFolderLinkList,
  image_source,
  email,
}: SharedProps) {
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: string) => {
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
      <Header profileImageSource={image_source} email={email} />
      <Banner folder={sampleFolderLinkList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Cards data={searchedData} />
      <Footer />
    </>
  );
}
