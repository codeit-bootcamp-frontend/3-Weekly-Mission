import styles from "./Modal.module.css";
export default function NameChangeModal({ state }: any) {
  return (
    <>
      <h2 className={styles["modal-title"]}>폴더 이름 변경</h2>
      <input
        className={styles["modal-input"]}
        placeholder={state["folderName"]}
      />
      <button className={styles["modal-submit-btn"]}>변경하기</button>
    </>
  );
}
