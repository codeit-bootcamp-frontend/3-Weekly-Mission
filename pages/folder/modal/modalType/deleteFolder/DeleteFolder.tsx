import { useModal } from "@/pages/folder/modal/Modal";
import CloseButton from "@/components/button/closeButton/CloseButton";
import styles from "./DeleteFolder.module.scss";
import Button from "@/components/button/Button";

export default function DeleteFolder() {
  const { handleClose } = useModal();

  const handleClick = () => {
    console.log("폴더 삭제");
  };
  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>폴더 삭제</h2>
      <h3 className={styles.folderName}>폴더명</h3>
      <Button className={styles.deleteButton} onClick={handleClick}>
        삭제하기
      </Button>
    </div>
  );
}
