import Image from "next/image";
import styles from "./AddLinkBar.module.css";

const AddLinkBar = () => {
  return (
    <div className={styles.AddLinkBar}>
      <div className={styles["AddLinkBar-icon"]}>
        <Image fill src="/assets/link.svg" alt="검색 링크 아이콘" />
      </div>
      <input className={styles["AddLinkBar-input"]} placeholder="링크를 추가해 보세요" />
      <button className={styles["AddLinkBar-button"]}>추가하기</button>
    </div>
  );
};

export default AddLinkBar;
