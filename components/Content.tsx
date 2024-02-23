import penIcon from "../public/pen.svg";
import shareIcon from "../public/share.svg";
import deleteIcon from "../public/delete.svg";
import plusImg from "../public/plus_img.svg";
import useGetFolderList from "../hooks/useGetFolderList";
import Card from "./Card";
import { useState } from "react";
import styles from "./Content.module.css";
import Modal from "./modals/Modal";
import useModal from "../hooks/useModal";
import Image from "next/image";

export default function Content({ userFolderLinks }: any) {
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
  const filteredLinkList = userFolderLinks?.filter(
    (data: any) =>
      data.folder_id === targetFolder["id"] || targetFolder["id"] === 0
  );

  return (
    <section className={styles["content"]}>
      <Modal state={modalState} onClick={handleModalCancel} />
      <div className={styles["folder-title-container"]}>
        <div className={styles["folder-title-wrapper"]}>
          <button
            className={
              targetFolder["title"] === "전체"
                ? `${styles.button} ${styles["folder-title"]} ${styles["selected"]}`
                : `${styles.button} ${styles["folder-title"]}`
            }
            onClick={() => handleClick("전체", 0)}
          >
            전체
          </button>
          {folderList?.map((folder: any) => (
            <button
              className={
                targetFolder["title"] === folder.name
                  ? `${styles.button} ${styles["folder-title"]} ${styles["selected"]}`
                  : `${styles.button} ${styles["folder-title"]}`
              }
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
          className={`${styles["button"]} ${styles["plus-btn"]} ${styles["add-folder-btn-wrapper"]}`}
          onClick={() =>
            setModalState({
              state: true,
              target: "폴더추가",
            })
          }
        >
          <span>폴더추가</span>
          <Image className={styles["plus-svg"]} src={plusImg} alt="plus-img" />
        </button>
      </div>

      <div className={styles["selected-category"]}>
        <h2 className={styles["h2"]}>{targetFolder["title"]}</h2>
        {targetFolder["title"] === "전체" || (
          <div className={styles["folder-edits"]}>
            <button
              className={`${styles.button} ${styles["edit-function"]}`}
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
              className={`${styles.button} ${styles["edit-function"]}`}
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
              className={`${styles.button} ${styles["edit-function"]}`}
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
        <div className={styles["card-container"]}>
          {filteredLinkList?.map((data: any) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div className={styles["no-link"]}>저장된 링크가 없습니다</div>
      )}
    </section>
  );
}
