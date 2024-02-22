import Head from "next/head";
import { useState } from "react";
import getSharedFolder from "@/api/getSharedFolder";
import getSharedUser from "@/api/getSharedUser";
import Header from "@/components/shared/Header/Header";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import CardList from "@/components/common/CardList/CardList";
import { SharedFolderInterface, SharedUserInterface } from "@/types/types";
import * as S from "./SharedPage.style";

export async function getServerSideProps() {
  let sharedUser: SharedUserInterface = await getSharedUser();
  let sharedFolder: SharedFolderInterface = await getSharedFolder();
  return {
    props: {
      sharedUser,
      sharedFolder,
    },
  };
}

export default function SharedPage({
  sharedUser,
  sharedFolder,
}: {
  sharedUser: SharedUserInterface;
  sharedFolder: SharedFolderInterface;
}) {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <Head>
        <title>shared</title>
      </Head>
      <Header sharedUser={sharedUser} sharedFolder={sharedFolder} />
      <S.Content>
        <SearchBar onChange={setKeyword} keys={keyword} />
        {keyword && (
          <S.Section>
            <S.H1>
              <S.Span>{keyword}</S.Span>으로 검색한 결과입니다.
            </S.H1>
          </S.Section>
        )}
      </S.Content>
      <S.List>
        <CardList cardList={sharedFolder?.folder.links} keyword={keyword} />
      </S.List>
    </>
  );
}
