import penIcon from "../public/pen.svg";
import shareIcon from "../public/share.svg";
import deleteIcon from "../public/delete.svg";
import plusImg from "../public/plus_img.svg";
import useGetFolderList, { UserFolderList } from "../hooks/useGetFolderList";
import Card from "./Card";
import { useState } from "react";
import styles from "./Content.module.css";
import Modal from "./modals/Modal";
import useModal from "../hooks/useModal";
import Image from "next/image";
import { UserFolderData } from "@/hooks/useGetUserFolder";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Content({
  folderLinkList,
}: {
  folderLinkList: UserFolderData[] | undefined;
}) {
  const [targetFolder, setTargetFolder] = useState({
    title: "전체",
    id: 0,
  });

  const [modalState, setModalState, handleModalCancel] = useModal();
  const folderList = useGetFolderList();

  const handleClick = (title: string, id: number) => {
    setTargetFolder({
      title: title,
      id: id,
    });
  };
  const filteredLinkList = folderLinkList?.filter(
    (data: any) =>
      data.folder_id === targetFolder["id"] || targetFolder["id"] === 0
  );

  return (
    <section className={cx("content")}>
      <Modal state={modalState} onClick={handleModalCancel} />
      <div className={cx("folder-title-container")}>
        <div className={cx("folder-title-wrapper")}>
          <button
            className={cx(
              "button",
              "folder-title",
              targetFolder["title"] === "전체" && "selected"
            )}
            onClick={() => handleClick("전체", 0)}
          >
            전체
          </button>
          {folderList?.map((folder: UserFolderList) => (
            <button
              className={cx(
                "button",
                "folder-title",
                targetFolder["title"] === folder.name && "selected"
              )}
              key={folder.id}
              onClick={() => {
                handleClick(folder.name, folder.id);
              }}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button
          className={cx("button", "plus-btn", "add-folder-btn-wrapper")}
          onClick={() =>
            setModalState({
              state: true,
              target: "폴더추가",
            })
          }
        >
          <span>폴더추가</span>
          <Image className={cx("plus-svg")} src={plusImg} alt="plus-img" />
        </button>
      </div>

      <div className={cx("selected-category")}>
        <h2 className={cx("h2")}>{targetFolder["title"]}</h2>
        {targetFolder["title"] === "전체" || (
          <div className={cx("folder-edits")}>
            <button
              className={cx("button", "edit-function")}
              onClick={() =>
                setModalState({
                  state: true,
                  target: "공유",
                  folderName: targetFolder["title"],
                })
              }
            >
              <Image src={shareIcon} alt="shareIcon" />
              공유
            </button>
            <button
              className={cx("button", "edit-function")}
              onClick={() =>
                setModalState({
                  state: true,
                  target: "이름 변경",
                  folderName: targetFolder["title"],
                })
              }
            >
              <Image src={penIcon} alt="penIcon" />
              이름 변경
            </button>
            <button
              className={cx("button", "edit-function")}
              onClick={() =>
                setModalState({
                  state: true,
                  target: "삭제",
                  folderName: targetFolder["title"],
                })
              }
            >
              <Image src={deleteIcon} alt="deleteIcon" />
              삭제
            </button>
          </div>
        )}
      </div>

      {filteredLinkList?.length ? (
        <div className={cx("card-container")}>
          {filteredLinkList?.map((data: UserFolderData) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div className={cx("no-link")}>저장된 링크가 없습니다</div>
      )}
    </section>
  );
}
