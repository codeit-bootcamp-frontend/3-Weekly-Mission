import styles from "./Modal.module.css";
export default function FolderDeleteModal({ state }: any) {
  return (
    <>
      <h2
        className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
      >
        폴더 삭제
      </h2>
      <h3 className={styles["link-and-folder-name"]}>
        {state["folderName"]}
      </h3>
      <button
        className={`${styles["modal-submit-btn"]} ${styles["modal-delete-btn"]}`}
      >
        삭제하기
      </button>
    </>
  );
}
