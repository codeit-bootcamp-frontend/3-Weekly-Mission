/* eslint-disable @next/next/no-img-element */
import { GetFolderId, ShowAll } from "@/pages/folder/folderApiTs";
import { FolderId, LinkId } from "@/pages/folder/type";
import React, { useEffect, useState } from "react";
import useFoldLink from "./hooks/useFoldLink";
import Header from "./Header";
import Section from "./Section";
import Search from "../../pages/folder/search/[search]";
import Sorted from "./Sorted";
import * as S from "./Style";
// import Image from "next/image";
import { ChangeNameModal, DeleteFolderModal, ShareModal } from "./modal/Modal";
import Card from "./Card";
import Footer from "./Footer";

export default function Folder() {
  const [sorted, setSorted] = useState<FolderId[]>([]);
  const [link, setLink] = useState<LinkId[]>([]);
  const [selectedName, setSelectedName] = useState<number>(0);
  const [linkTitle, setLinkTitle] = useState<string>("전체");
  const [modal, setModal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const clickName: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = Number(e.currentTarget.value);
    setSelectedName(value);
    setLinkTitle(e.currentTarget.title);
  };

  const getFolderId = async () => {
    const userProfileId = 1;
    try {
      const folderId: FolderId[] = await GetFolderId(userProfileId);
      setSorted(folderId);

      const linkId: LinkId[] = await ShowAll(userProfileId);
      setLink(linkId);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getFolderId();
  }, []);

  useFoldLink(selectedName);

  const foldLink = useFoldLink(selectedName);

  const handleModal = (content: string) => {
    setModal(content);
    setOpenModal(true);
  };

  const handleClose = () => {
    setModal(null);
    setOpenModal(false);
  };

  const isSorted = linkTitle !== "전체";

  return (
    <>
      <Header />
      <Section />
      <Search />
      <Sorted data={sorted} selectedName={selectedName} clickName={clickName} />
      <S.CardTitle>
        <S.CardTitleText>{linkTitle}</S.CardTitleText>
        {isSorted && (
          <S.SortedEdit>
            <S.EditContent onClick={() => handleModal("ShareModal")}>
              <img src={"/assets/Icons/share.svg"} alt="share 아이콘 이미지" />
              <span>공유</span>
            </S.EditContent>

            <S.EditContent onClick={() => handleModal("ChangeNameModal")}>
              <img src={"/assets/Icons/pen.svg"} alt="pen 아이콘 이미지" />
              <span>이름 변경</span>
            </S.EditContent>

            <S.EditContent onClick={() => handleModal("DeleteFolderModal")}>
              <img
                src={"/assets/Icons/delete.svg"}
                alt="delete 아이콘 이미지"
              />
              <span>삭제</span>
            </S.EditContent>
          </S.SortedEdit>
        )}
        {openModal && modal === "ShareModal" && (
          <ShareModal onClose={handleClose} />
        )}
        {openModal && modal === "ChangeNameModal" && (
          <ChangeNameModal onClose={handleClose} />
        )}
        {openModal && modal === "DeleteFolderModal" && (
          <DeleteFolderModal onClose={handleClose} />
        )}
      </S.CardTitle>
      {foldLink && foldLink.length > 0 ? (
        <S.CardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </S.CardBox>
      ) : (
        <S.NoData>저장된 링크가 없습니다.</S.NoData>
      )}
      <Footer />
    </>
  );
}
