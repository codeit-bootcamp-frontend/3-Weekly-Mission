import React, { useEffect, useState } from "react";
import CardList from "@/components/CardList/CardList";
import { getFolderData, getFolderList, getOwner } from "@/apis/api";
import LinkSearchForm from "@/components/LinkSearchForm/LinkSearchForm";
import useFetchData from "@/hooks/useFetchData";
import {
  CardItem,
  FolderData,
  FolderOwnerData,
  OwnerData,
} from "@/types/dataTypes";
import { VoidFunc } from "@/types/functionType";
import SearchResult from "@/components/SearchResult/SearchResult";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import Spinner from "@/components/Spinner/Spinner";
import { codeitLogo } from "@/public/img";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 아직 userId가 명확하지 않아 25로 고정
  const userId = "25";
  const folderId = context.params?.folderId;

  return {
    props: {
      userId,
      folderId,
    },
  };
}

interface Props {
  userId: string;
  folderId: string;
}

export default function SharedPage({ userId, folderId }: Props) {
  const {
    data: cardListItem,
    fetchData: setCardListItem,
    setData: filterCardList,
    isLoading,
  }: {
    data: CardItem[] | null;
    fetchData: VoidFunc;
    setData: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
    isLoading: boolean;
  } = useFetchData(() => getFolderData(folderId, userId!));
  const folderData: FolderData[] =
    useFetchData(() => getFolderList(userId)).data || [];

  const ownerData: OwnerData[] =
    useFetchData(() => getOwner(userId!)).data || [];
  const [folderName, setFolderName] = useState("");
  const [folderOwner, setFolderOwner] = useState<FolderOwnerData | null>(null);
  const [searchName, setSearchName] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleHeaderData: VoidFunc = () => {
    if (folderData.length < 1 || ownerData.length < 1) {
      return;
    }
    const folder = folderData?.find((data) => data.id === +folderId!);
    if (!folder) {
      return;
    }
    setFolderName(folder.name);
    const { name, imageSource } = ownerData[0];
    setFolderOwner({ name, imageSource });
  };

  useEffect(() => {
    handleHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderData, ownerData]);

  if (isLoading) {
    return (
      <div className="shared-spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <main>
      {folderOwner ? (
        <SharedHeader folderName={folderName} folderOwner={folderOwner} />
      ) : null}

      <div className="shared-card-board">
        <LinkSearchForm
          searchName={searchName}
          setSearchName={setSearchName}
          filterCardList={filterCardList}
          setIsSearch={setIsSearch}
          setCardListItem={setCardListItem}
        />
        {isSearch ? <SearchResult searchName={searchName} /> : null}
        {cardListItem ? (
          <CardList itemList={cardListItem} toggle={false} />
        ) : null}
      </div>
    </main>
  );
}
interface HeaderProps {
  folderOwner: FolderOwnerData;
  folderName: string;
}
function SharedHeader({ folderOwner, folderName }: HeaderProps) {
  const ownerName = folderOwner.name ? folderOwner.name : null;
  const source = folderOwner.imageSource;

  return (
    <div className="shared-header">
      {source ? (
        <img className="user-profile-img" src={source} alt="유저이미지" />
      ) : (
        <div className="codeit-img-background">
          <Image fill priority src={codeitLogo} alt="코드잇 로고 이미지" />
        </div>
      )}

      <span>{ownerName}</span>
      <h2>{folderName}</h2>
    </div>
  );
}
