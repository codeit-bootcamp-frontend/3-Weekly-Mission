import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLinksByUserIdAndFolderId } from "@/lib/api";
import { filterLinks } from "@/lib/searchFilter";
import SearchBar from "@/components/searchBar/SearchBar";
import LinkItem from "@/components/linkItem/LinkItem";
import Header from "@/components/header/Header";
import OwnerInfo from "./ownerInfo/OwnerInfo";
import Container from "@/container/Container";
import Footer from "@/components/footer/Footer";
import styles from "@/styles/shared.module.scss";

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

export default function Shared() {
  const [links, setLinks] = useState<Link[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const router = useRouter();
  const { user: userId, folder: folderId } = router.query;

  const handleSearch = (value: string) => {
    setKeyword(value);
    router.push(
      `${router.pathname}?user=${userId}&folder=${folderId}&keyword=${value}`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(
          Number(userId),
          folderId as string
        );
        if (!data) return;
        const filteredLinks = filterLinks(data, keyword);
        setLinks(filteredLinks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [keyword, userId, folderId]);

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <OwnerInfo />
      </div>
      <Container className={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <div className={styles.content}>
          {links?.length === 0 ? (
            <h2 className={styles.emptyList}>저장된 링크가 없습니다</h2>
          ) : (
            <div className={styles.linkList}>
              {links?.map((linkInfo) => (
                <LinkItem key={linkInfo.id} linkInfo={linkInfo} />
              ))}
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
