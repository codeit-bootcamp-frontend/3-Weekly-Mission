import styles from "./Modal.module.css";
export default function AddFolderModal() {
  return (
    <>
      <h2 className={styles["modal-title"]}>폴더 추가</h2>
      <input className={styles["modal-input"]} />
      <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles["modal-submit-btn"]}
      >
        추가하기
      </button>
    </>
  );
}
// 케밥 바깥 클릭시 닫히게
// HOC
