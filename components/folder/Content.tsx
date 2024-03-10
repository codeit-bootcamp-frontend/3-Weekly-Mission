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

const cx = classNames.bind(styles);

export default function Content({
  searchedLinkList,
  folderList,
}: {
  searchedLinkList: UserFolderLinkData[];
  folderList: UserFolder[];
}) {
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
      <Modal state={modalState} onClick={handleModalCancel} />
      <Category
        handleClick={handleClick}
        folderList={folderList}
        setModalState={setModalState}
        targetFolder={targetFolder}
      />
      <TitleBar setModalState={setModalState} targetFolder={targetFolder} />
      {filteredFolder[0]?.link_count ? (
        <div className={cx("card-container")}>
          {searchedLinkList?.map((data) => (
            <Card
              key={data.id}
              data={data}
              folderList={folderList}
              isFolder={true}
            />
          ))}
        </div>
      ) : (
        <div className={cx("no-link")}>저장된 링크가 없습니다</div>
      )}
    </section>
  );
}
