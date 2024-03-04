import { useCallback, useEffect, useState } from "react";
import LinkSearchForm from "@/components/LinkSearchForm/LinkSearchForm";
import LinkAddForm from "@/components/LinkAddForm/LinkAddForm";
import { getFolderData, getFolderList, getLinkList } from "@/apis/api";
import FolderListButton from "@/components/FolderListButton/FolderListButton";
import CardList from "@/components/CardList/CardList";
import useFetchData from "@/hooks/useFetchData";
import FolderNameLine from "@/components/FolderNameLine/FolderNameLine";
import FloatingActionButton from "@/components/FloatingActionButton/FloatingActionButton";
import NoLinkBlock from "@/components/NoLinkBlock/NoLinkBlock";
import Modal from "@/components/Modal/Modal";
import styled from "styled-components";
import { NavbarUserInfo } from "@/types/userType";
import { ApiFunc, VoidFunc } from "@/types/functionType";
import { CardItem, FolderData } from "@/types/dataTypes";
import SearchResult from "@/components/SearchResult/SearchResult";
import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";

interface Props {
  user: NavbarUserInfo;
}

export default function FolderPage({ user }: Props) {
  const router = useRouter();
  let getFolderDataFunc = () => getLinkList(user.id);
  if (router.asPath.length > 7) {
    const folderId = router.asPath.slice(8);
    getFolderDataFunc = () => getFolderData(folderId, user.id);
  }
  const {
    data: cardListItem,
    fetchData: setCardListItem,
    setData: filterCardList,
    isLoading: cardLisLoading,
  }: {
    data: CardItem[] | null;
    fetchData: (callback?: ApiFunc) => void;
    setData: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
    isLoading: boolean;
  } = useFetchData(getFolderDataFunc);
  const {
    data: folderNameList,
    fetchData,
  }: { data: FolderData[]; fetchData: (callback?: ApiFunc) => void } =
    useFetchData(() => getFolderList(user?.id));
  const [folderName, setFolderName] = useState("전체");
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalUrl, setModalUrl] = useState("");
  const [searchName, setSearchName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const toggleModalClick: VoidFunc = () => {
    setIsModalClicked(!isModalClicked);
  };
  const handleModalButtonClick = ({
    currentTarget,
    url,
  }: React.MouseEvent<HTMLButtonElement> & { url: string }) => {
    const targetId = currentTarget.id;
    setModalId(targetId);
    setModalUrl(url);
    toggleModalClick();
  };
  useEffect(() => {
    if (router.asPath.length > 7) {
      const folderId = router.asPath.slice(8);
      const findFolder = folderNameList?.find(
        (folder) => folder.id === +folderId
      );
      console.log(findFolder);
      setFolderName((prev) => findFolder?.name || prev);
    }
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderNameList]);
  useEffect(() => {
    if (user) {
      fetchData();
      setCardListItem();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (cardLisLoading || !user || !folderNameList) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <Main>
      {isModalClicked && (
        <Modal
          user={user}
          itemList={folderNameList}
          modalUrl={modalUrl}
          folderName={folderName}
          modalId={modalId}
          toggleModalClick={toggleModalClick}
        />
      )}
      <Header>
        <LinkAddForm />
      </Header>
      <LinkBoard>
        <LinkSearchForm
          searchName={searchName}
          setSearchName={setSearchName}
          filterCardList={filterCardList}
          setIsSearch={setIsSearch}
          setCardListItem={setCardListItem}
        />
        {isSearch ? <SearchResult searchName={searchName} /> : null}
        <Container>
          <FolderListButton
            handleModalButtonClick={handleModalButtonClick}
            itemList={folderNameList}
            setFolderName={setFolderName}
            setCardListItem={setCardListItem}
            folderName={folderName}
            userId={user?.id}
          />
          <FolderNameLine
            handleModalButtonClick={handleModalButtonClick}
            folderName={folderName}
          />
          {cardListItem ? (
            <CardList
              handleModalButtonClick={handleModalButtonClick}
              itemList={cardListItem}
              toggle={true}
            />
          ) : (
            <NoLinkBlock />
          )}
        </Container>
        <FloatingActionButton modalOnClick={handleModalButtonClick} />
      </LinkBoard>
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  z-index: 6;
`;

const Header = styled.section`
  margin: 0 auto;
  padding: 60px 0 90px;
`;

const LinkBoard = styled.section`
  background-color: #fff;
  padding: 40px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  max-width: 106rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 1124px) {
    max-width: 70.4rem;
  }
  @media screen and (max-width: 756px) {
    max-width: 32.5rem;
  }
`;

const SpinnerContainer = styled.div`
  text-align: center;
  margin: 100px 0 200px;
`;
