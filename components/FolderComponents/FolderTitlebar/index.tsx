import styles from "@/styles/titlebar.module.css";

export default function FolderTitlebar() {
  return (
    <section className={styles["titlebar-section"]}>
      <div className="container">
        <div className={styles["addlink-box"]}>
          <input type="text" placeholder="링크를 추가해 보세요." />
          <button>추가하기</button>
        </div>
      </div>
    </section>
  );
}
