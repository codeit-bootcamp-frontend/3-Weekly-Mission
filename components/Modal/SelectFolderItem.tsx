import { MouseEvent } from "react";
import styles from "./SelectFolderItem.module.css";
import Image from "next/image";

interface Props {
  name: string;
  count: number;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

function SelectFolderItem({ name, count, isSelected, onClick }: Props) {
  return (
    <div
      className={
        isSelected
          ? `${styles.folderItem} ${styles.selected}`
          : styles.folderItem
      }
      onClick={onClick}
    >
      <span className={styles.textContainer}>
        <span className={styles.nameText}>{name}</span>
        <span className={styles.countText}>{count}개 링크</span>
      </span>
      {isSelected && <Image src="/svgs/check-icon.svg" alt="check" />}
    </div>
  );
}

export default SelectFolderItem;
