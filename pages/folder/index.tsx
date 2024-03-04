/* eslint-disable react-hooks/exhaustive-deps */
import getAllCard from "@/api/getAllCard";
import getFolderList from "@/api/getFolderList";
import AddLink from "@/components/Folder/AddLink/AddLink";
import ModalCreate from "@/components/modals/ModalCreate";
import useModal from "@/hooks/useModal";
import { CardInterface, FolderInterface } from "@/types/types";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import * as S from "./FolderPage.style";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import FolderTag from "@/components/Folder/FolderTag/FolderTag";
import FolderMake from "@/components/Folder/FolderMake/FolderMake";
import FolderModify from "@/components/Folder/FolderModify/FolderModify";
import CardList from "@/components/common/CardList/CardList";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const INITIAL: FolderInterface = {
  id: "",
  name: "전체",
};

export default function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInterface[]>([INITIAL]);
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [current, setCurrent] = useState(INITIAL);
  const [keyword, setKeyword] = useState("");
  const { modal, handleOpen, handleClose } = useModal();
  const { user } = useAuth(true);
  const router = useRouter();

  const getFolderTag = useCallback(async () => {
    const { data } = await getFolderList(user?.id);
    setFolderList(() => [INITIAL, ...data?.folder]);
  }, []);

  const getCard = useCallback(async (current: FolderInterface) => {
    const data = await getAllCard(user?.id, current.id);
    if (data) {
      const next = {
        id: current.id,
        name: current.name,
      };
      setCurrent(() => {
        return { ...next };
      });
      setCardList(() => {
        return [...data];
      });
    }
    return data;
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/signin");
      return;
    }
    getFolderTag();
    getCard(current);
  }, [getFolderTag, getCard, current]);

  return (
    <>
      <Head>
        <title>folder</title>
      </Head>
      {modal && modal.show && (
        <ModalCreate onClick={handleClose}>{modal?.component}</ModalCreate>
      )}
      <AddLink />
      <S.Content>
        <SearchBar onChange={setKeyword} keys={keyword} />
        {keyword && (
          <S.Section>
            <S.H1>
              <S.Span>{keyword}</S.Span>으로 검색한 결과이다.
            </S.H1>
          </S.Section>
        )}
        <FolderTag folders={folderList} current={current} onClick={getCard} />
        <FolderMake onClick={handleOpen} />
      </S.Content>
      <S.Div>
        <FolderModify folder={current} onClick={handleOpen} />
      </S.Div>
      <S.List>
        <CardList
          cardList={cardList}
          folderList={folderList}
          onClick={handleOpen}
          keyword={keyword}
        />
      </S.List>
    </>
  );
}
