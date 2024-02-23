import styles from "./Modal.module.css";
export default function AddLinkModal({ state, data: folderList, link }: any) {
  return (
    <>
      <h2
        className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
      >
        폴더에 추가
      </h2>
      <h3 className={styles["link-and-folder-name"]}>{state["url"] ?? link}</h3>
      <div className={styles["folder-item-wrapper"]}>
        {folderList.map((folder: any) => (
          <div key={folder?.id} className={styles["folder-item"]}>
            <span className={styles["link-name"]}>{folder?.name}</span>
            <span className={styles["link-length"]}>
              {folder?.link?.count}개 링크
            </span>
          </div>
        ))}
      </div>
      <button className={styles["modal-submit-btn"]}>추가하기</button>
    </>
  );
}
