import Card from "../common/Card";
import { useState } from "react";
import styles from "./Content.module.css";
import Modal from "../modals/Modal";
import useModal from "../../hooks/useModal";
import classNames from "classnames/bind";
import { type UserFolder, type UserFolderLinkData } from "@/api/api";
import { useRouter } from "next/router";
import TitleBar from "./TitleBar";
import Category from "./Category";
import Cards from "../common/Cards";

const cx = classNames.bind(styles);

interface Props {
  searchedLinkList: UserFolderLinkData[];
  folderList: UserFolder[];
}

export default function Content({ searchedLinkList, folderList }: Props) {
  const router = useRouter();
  const path = router.asPath;
  const folderIdAry = path.split("/");
  const folderId = Number(folderIdAry[folderIdAry.length - 1]) || 0;
  const [targetFolder, setTargetFolder] = useState({
    title: "전체",
    id: folderId,
  });
  const [modalState, setModalState, handleModalCancel] = useModal();

  const handleClick = (title: string, id: number) => {
    setTargetFolder({ title, id });
    if (id === 0) {
      router.push(`/folder`, `/folder`, { shallow: true });
    } else {
      router.push(`/folder`, `/folder/${id}`, { shallow: true });
    }
  };
  const filteredFolder = folderList?.filter(
    (data) => data.id === targetFolder["id"] || targetFolder["id"] === 0
  );

  // const data = useMemo(async () => {
  //   const data = await getUserFolderLinkList(String(targetFolder.id));
  //   return data;
  // }, [targetFolder.id]);
  return (
    <section className={cx("content")}>
      <Modal state={modalState} onClick={handleModalCancel} folderList={[]} link=""/>
      <Category
        handleClick={handleClick}
        folderList={folderList}
        setModalState={setModalState}
        targetFolder={targetFolder}
      />
      <TitleBar setModalState={setModalState} targetFolder={targetFolder} />
      <Cards data={searchedLinkList} isFolder={true} />
    </section>
  );
}
