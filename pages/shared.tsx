import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { useMemo, useState } from "react";
import { getSampleFolder } from "@/api";
import Footer from "@/components/Footer";

export interface Links {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Links[];
}

export async function getStaticProps() {
  const { folder } = await getSampleFolder();

  return { props: { folder } };
}

export default function Shared({ folder: sampleFolderLinkList }: {folder: SampleFolder}) {
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: any) => {
    setsearchValue(value);
  };

  const searchedData = useMemo(() => {
    return sampleFolderLinkList?.links?.filter((item: Links) => {
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
      <Header isSticky={false} />
      <Banner folder={sampleFolderLinkList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Cards data={searchedData} />
      <Footer />
    </>
  );
}
