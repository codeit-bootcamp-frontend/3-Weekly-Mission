import styles from "./Modal.module.css";
export default function AddFolderModal({ state }: any) {
  return (
    <>
      <h2 className={styles["modal-title"]}>폴더 추가</h2>
      <input className={styles["modal-input"]} />
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={styles["modal-submit-btn"]}
      >
        추가하기
      </button>
    </>
  );
}
