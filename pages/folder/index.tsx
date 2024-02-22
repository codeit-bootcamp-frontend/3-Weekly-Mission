import getAllCard from "@/api/getAllCard";
import getFolderList from "@/api/getFolderList";
import useModal from "@/hooks/useModal";
import { CardInterface, FolderInterface } from "@/types/types";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

const INITIAL: FolderInterface = {
  id: "",
  name: "전체",
};

export default function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInterface[]>([
    INITIAL,
  ]);
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [current, setCurrent] = useState(INITIAL);
  const [keyword, setKeyword] = useState("");
  const { modal, handleOpen, handleClose } = useModal();

  const getFolderTag = useCallback(async () => {
    const { data } = await getFolderList();
    setFolderList(() => [INITIAL, ...data]);
  }, []);

  const getCard = useCallback(async (current: FolderInterface) => {
    const data = await getAllCard(current.id);
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
    getFolderTag();
    getCard(current);
  }, [getFolderTag, getCard, current]);

  return (
    <>
      <Head>
        <title>folder</title>
      </Head>
      {modal && modal.show && (
        <
      )}
    </>
  )
}