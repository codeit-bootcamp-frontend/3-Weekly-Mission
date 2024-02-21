import { useEffect, useState } from "react";
import { getLinksByUserIdAndFolderId } from "@/lib/api";
import { filterLinks as filterLinks } from "@/lib/searchFilter";
import { useRouter } from "next/router";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PageContainer from "@/container/Container";
import SearchBar from "@/components/searchBar/SearchBar";
import styles from "@/styles/folder.module.scss";
import LinkItem from "@/components/linkItem/LinkItem";
import AddLinkBar from "@/pages/folder/addLinkBar/AddLinkBar";
import Modal from "./modal/Modal";
import FolderMenu from "./folderMenu/FolderMenu";

type Link = {
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: number | null;
  image_source: string | null;
  title: string | null;
  updated_at: string | null;
  url: string | null;
};

export default function Folder() {
  const router = useRouter();
  const { type, folderId } = router.query;
  const [links, setLinks] = useState<Link[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (value: string) => {
    console.log(value);
    setKeyword(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(
          1,
          folderId as string
        );
        console.log(data);
        if (!data) return;
        const filteredLinks = filterLinks(data, keyword);
        setLinks(filteredLinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [keyword, folderId]);

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <AddLinkBar />
      </div>
      <PageContainer className={styles.content}>
        <SearchBar onSearch={handleSearch} />
        <FolderMenu />
        {links?.length === 0 ? (
          <h2 className={styles.emptyList}>저장된 링크가 없습니다</h2>
        ) : (
          <div className={styles.linkList}>
            {links?.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo} />
            ))}
          </div>
        )}
      </PageContainer>
      <Footer />
      {type && <Modal />}
    </>
  );
}
