import styles from "./Modal.module.css";
export default function LinkDeleteModal({ state }: any) {
  return (
    <>
      <h2
        className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
      >
        링크 삭제
      </h2>
      <h3 className={styles["link-and-folder-name"]}>{state["url"]}</h3>
      <button
        className={`${styles["modal-submit-btn"]} ${styles["modal-delete-btn"]}`}
      >
        삭제하기
      </button>
    </>
  );
}
